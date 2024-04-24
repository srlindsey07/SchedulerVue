<script setup lang="ts">
import {
    computed,
    nextTick,
    ref,
    watch,
    type ButtonHTMLAttributes,
    type ComputedRef,
} from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AppBaseFormField from './AppBaseFormField.vue'
import type { SelectFieldOption } from '@/models/shared-models'

const props = withDefaults(
    defineProps<{
        label: string
        id: string
        fieldState: any
        model: ButtonHTMLAttributes['value']
        options: SelectFieldOption[]
        hint?: string
        disabled?: boolean
        required?: boolean
    }>(),
    {
        disabled: false,
        required: false,
    },
)
const emit = defineEmits(['update:model'])
const open = ref(false)
const optionEls = ref<HTMLLIElement[]>([])
const buttonEl = ref<HTMLButtonElement>()

const errors = computed(() => props.fieldState.$errors)
const hasErrors: ComputedRef<boolean | undefined> = computed(
    () => props.fieldState.$errors && props.fieldState.$errors.length > 0,
)

function onOptionSelect(value: string): void {
    emit('update:model', value)
    updateMenuOpen(false)
}

function updateMenuOpen(isOpen: boolean): void {
    open.value = isOpen

    if (optionEls?.value && !!open.value) {
        focusOption(0)
    }
}

function isSelectedOption(value: string): boolean {
    return value === props.model
}

function focusOption(index: number): void {
    nextTick(() => optionEls.value[index].focus())
}

function focusNextOption(currentIndex: number): void {
    let nextIndex = currentIndex

    if (currentIndex < optionEls?.value.length - 1) {
        nextIndex++
    } else {
        nextIndex = 0
    }

    focusOption(nextIndex)
}

function focusPrevOption(currentIndex: number): void {
    let nextIndex = currentIndex

    if (currentIndex > 0) {
        nextIndex--
    } else {
        nextIndex = optionEls?.value.length - 1
    }

    focusOption(nextIndex)
}

function escMenu(e: Event): void {
    e.preventDefault() // prevent dialogs from closing
    updateMenuOpen(false)
}

watch(
    open,
    (newValue) => {
        if (newValue === false) {
            setTimeout(() => {
                buttonEl.value?.focus()
            }, 0)
        }
    },
    { flush: 'post' },
)
</script>

<template>
    <AppBaseFormField
        v-click-outside="() => updateMenuOpen(false)"
        :label="label"
        :id="id"
        :errors="errors"
        :disabled="disabled"
        :required="required"
    >
        <button
            ref="buttonEl"
            role="combobox"
            type="button"
            tabindex="0"
            class="peer w-full outline-none p-3.5 pt-4 text-left cursor-pointer disabled:pointer-events-none disabled:bg-slate-100 flex justify-between items-center"
            :id="id"
            :value="model"
            :disabled="disabled"
            :aria-expanded="open"
            :aria-invalid="hasErrors"
            :aria-controls="`${id}-listbox`"
            aria-haspopup="listbox"
            @click="updateMenuOpen(!open)"
            @keydown.enter="updateMenuOpen(!open)"
            @keydown.space="updateMenuOpen(!open)"
            @blur="fieldState.$touch"
        >
            <span>{{ model ? model : 'Select' }}</span>
            <FontAwesomeIcon :icon="['fas', 'caret-down']" />
        </button>

        <ul
            role="listbox"
            :id="`${id}-listbox`"
            class="absolute shadow-md rounded-b bg-white w-full py-3"
            :class="{ open: open, 'h-0 invisible': !open }"
            :aria-hidden="!open"
        >
            <li
                v-for="(option, index) in options"
                ref="optionEls"
                class="flex justify-between py-3 px-4 outline-none cursor-pointer hover:bg-slate-100 focus:bg-slate-100"
                :class="{
                    'bg-slate-200 focus:bg-slate-300': isSelectedOption(
                        option.value,
                    ),
                }"
                role="option"
                :key="`${id}-listbox-opt-${index}`"
                @click="onOptionSelect(option.value)"
                @keydown.enter="onOptionSelect(option.value)"
                @keydown.space="onOptionSelect(option.value)"
                @keydown.down="focusNextOption(index)"
                @keydown.up="focusPrevOption(index)"
                @keydown.esc="escMenu"
                tabindex="0"
            >
                <span>{{ option.label }}</span>
                <span v-if="isSelectedOption(option.value)"
                    ><FontAwesomeIcon
                        :icon="['fas', 'fa-check']"
                        aria-label="Selected"
                /></span>
            </li>
        </ul>
    </AppBaseFormField>
</template>
