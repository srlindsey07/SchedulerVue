<script setup lang="ts">
import type { ErrorObject } from '@vuelidate/core'
import AppFormFieldHint from './AppFormFieldHint.vue'
import { computed, type ComputedRef } from 'vue'

const props = withDefaults(
    defineProps<{
        label: string
        id: string
        hint?: string
        errors?: ErrorObject[]
        disabled?: boolean
        required?: boolean
    }>(),
    {
        disabled: false,
        required: false,
    },
)
const hasErrors: ComputedRef<boolean | undefined> = computed(
    () => props.errors && props.errors.length > 0,
)
const firstError: ComputedRef<ErrorObject | undefined> = computed(() =>
    hasErrors.value ? props.errors[0] : undefined,
)
</script>

<template>
    <div
        class="relative mb-5 mt-3 flex flex-col"
        :class="{ 'opacity-50': disabled }"
    >
        <label
            class="absolute -top-2.5 left-4 text-sm font-medium z-[1]"
            :class="{ 'text-red-600': hasErrors }"
        >
            {{ label
            }}<sup
                v-if="required"
                aria-label="required"
                >*</sup
            >
        </label>

        <div class="relative">
            <!-- INPUT FIELD -->
            <slot></slot>

            <fieldset
                aria-hidden="true"
                class="absolute inset-0 -top-2.5 px-2.5 text-sm font-medium border rounded pointer-events-none peer-focus:border-2"
                :class="{
                    'border-red-600 peer-hover:border-red-500': hasErrors,
                    'border-slate-400 peer-hover:border-slate-600 peer-focus:border-primary':
                        !hasErrors,
                    'border-dotted': disabled,
                }"
            >
                <legend
                    class="px-1.5 invisible"
                    :class="{ 'pr-2.5': required }"
                >
                    {{ label }}
                </legend>
            </fieldset>
        </div>

        <AppFormFieldHint
            v-if="firstError"
            :id="`${id}-error`"
            :message="firstError.$message"
            :isError="true"
        />

        <AppFormFieldHint
            v-if="!!hint && !hasErrors"
            :id="`${id}-hint`"
            :message="hint"
        />
    </div>
</template>
