<script setup lang="ts">
import AppDialog from '@/shared/components/AppDialog/AppDialog.vue'
import AppDialogHeader from '@/shared/components/AppDialog/AppDialogHeader.vue'
import AddAppointmentForm from './AddAppointmentForm.vue'
import AppDialogFooter from '@/shared/components/AppDialog/AppDialogFooter.vue'
import AppDialogActions from '@/shared/components/AppDialog/AppDialogActions.vue'
import AppButton from '@/shared/components/AppButton/AppButton.vue'

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
