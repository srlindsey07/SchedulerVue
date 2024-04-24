<script setup lang="ts">
import { reactive } from 'vue'
import type { Data, Rules } from 'vue-tiny-validate'
import useValidate from 'vue-tiny-validate'
import AppTextField from './AppFormFields/AppTextField.vue'
import AppSelectField from './AppFormFields/AppSelectField.vue'
import { useForm } from '@vorms/core'
import { required, minLength, email, maxLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'

interface IAddAppointmentForm {
    name: string
    type: string
}
const formData = reactive<IAddAppointmentForm>({
    name: '',
    type: '',
})
const formRules = {
    name: { required, minLength: minLength(2) },
    type: { required },
}
const formState = useVuelidate(formRules, formData)

function handleSubmit() {
    console.log(formState.value)
}
</script>

<template>
    <form>
        <AppTextField
            id="testingFormField"
            label="First Name"
            :fieldState="formState.name"
            v-model:model="formData.name"
            :required="true"
            hint="Testing hint message"
        />

        <AppSelectField
            label="Appointment Type"
            id="apptType"
            :fieldState="formState.type"
            v-model:model="formData.type"
            :required="true"
            :options="[
                { value: 'test', label: 'Test 1' },
                { value: 'test2', label: 'Test 2' },
                { value: 'test3', label: 'Test 3' },
            ]"
        />
    </form>
</template>
