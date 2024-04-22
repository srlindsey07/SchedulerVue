<script setup lang="ts">
import AppDialog from './AppDialog/AppDialog.vue'
import AppDialogHeader from './AppDialog/AppDialogHeader.vue'
import AppDialogFooter from './AppDialog/AppDialogFooter.vue'
import AppDialogActions from './AppDialog/AppDialogActions.vue'
import AddAppointmentForm from './AddAppointmentForm.vue'
import AppButton from './AppButton/AppButton.vue'

const props = defineProps<{
    dialogOpen: boolean
}>()
</script>

<template>
    <AppDialog :open="dialogOpen">
        <AppDialogHeader
            title="Dialog Title"
            subtitle="This is a dialog subtitle"
        />

        <AddAppointmentForm />

        <AppDialogFooter>
            <AppDialogActions>
                <AppButton
                    label="Cancel"
                    variant="text"
                    @click="$emit('update:dialogOpen', false)"
                />
                <AppButton
                    label="Submit"
                    variant="text"
                />
            </AppDialogActions>
        </AppDialogFooter>
    </AppDialog>
</template>
