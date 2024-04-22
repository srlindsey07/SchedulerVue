<script setup lang="ts">
import { computed, ref, type ButtonHTMLAttributes, type ComputedRef } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AppBaseFormField from './AppBaseFormField.vue'
const props = withDefaults(
    defineProps<{
        label: string
        id: string
        fieldState: any
        model: ButtonHTMLAttributes['value']
        options: { value: string; label: string }[]
        hint?: string
        disabled?: boolean
        required?: boolean
    }>(),
    {
        disabled: false,
        required: false,
    },
)
const open = ref(false)
const selectedOption = ref('Select')

const errors = computed(() => props.fieldState.$errors)
const hasErrors: ComputedRef<boolean | undefined> = computed(
    () => props.fieldState.$errors && props.fieldState.$errors.length > 0,
)

function onOptionSelect(): void {}
function onSelectClick(): void {
    open.value = !open.value
}
</script>

<template>
    <AppBaseFormField
        :label="label"
        :id="id"
        :errors="errors"
        :disabled="disabled"
        :required="required"
    >
        <button
            role="combobox"
            class="w-full outline-none p-3.5 pt-4 text-left cursor-pointer disabled:pointer-events-none disabled:bg-slate-100 flex justify-between items-center"
            :id="id"
            :value="model"
            :aria-controls="`${id}-listbox`"
            aria-haspopup="listbox"
            tabindex="0"
            :aria-expanded="open"
            :aria-invalid="hasErrors"
            :disabled="disabled"
            @click="onSelectClick"
        >
            <span>{{ model ? model : 'Select' }}</span>
            <FontAwesomeIcon :icon="['fas', 'caret-down']" />
        </button>

        <ul
            v-if="open"
            role="listbox"
            :id="`${id}-listbox`"
            class="absolute shadow bg-white w-full py-3"
        >
            <li
                v-for="(option, index) in options"
                class="py-3 px-4"
                role="option"
                :key="`${id}-listbox-opt-${index}`"
                @click="onOptionSelect"
                tabindex="0"
            >
                {{ option.label }}
            </li>
        </ul>
    </AppBaseFormField>
</template>
