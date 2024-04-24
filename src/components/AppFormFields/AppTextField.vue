<script setup lang="ts">
import { computed } from 'vue'
import AppFormFieldHint from './AppFormFieldHint.vue'
import AppBaseFormField from './AppBaseFormField.vue'

const props = withDefaults(
    defineProps<{
        label: string
        id: string
        fieldState: any
        model: string | number | boolean
        hint?: string
        type?: 'text' | 'number' | 'email' | 'password'
        disabled?: boolean
        required?: boolean
    }>(),
    {
        type: 'text',
        disabled: false,
        required: false,
    },
)
const emit = defineEmits(['update:model'])

const errors = computed(() => props.fieldState.$errors)
const hasErrors = computed(() => props.fieldState.$errors.length > 0)

const emitValue = (e: Event): void => {
    emit('update:model', (e.target as HTMLInputElement).value)
}
</script>

<template>
    <AppBaseFormField
        :label="label"
        :id="id"
        :errors="errors"
        :hint="hint"
        :disabled="disabled"
        :required="required"
    >
        <input
            class="peer w-full outline-none p-3.5 pt-4 cursor-pointer disabled:pointer-events-none disabled:bg-slate-100"
            :id="id"
            :type="type"
            :value="model"
            :required="required"
            :disabled="disabled"
            @input="emitValue"
            @blur="fieldState.$touch"
            :aria-invalid="hasErrors"
            :aria-describedby="`${id}-hint ${id}-error`"
        />
    </AppBaseFormField>
</template>
