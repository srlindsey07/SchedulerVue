<script setup lang="ts">
import { reactive } from 'vue'
import AppTextField from '@/shared/components/AppFormFields/AppTextField.vue'
import AppSelectField from '@/shared/components/AppFormFields/AppSelectField.vue'
import { required, minLength } from '@vuelidate/validators'
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
