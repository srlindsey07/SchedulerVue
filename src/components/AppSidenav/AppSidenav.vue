<script setup lang="ts">
    import AppSidenavLink from "./AppSidenavLink.vue"
</script>

<template>
    <nav class="bg-primary h-full p text-primary-contrast">
        <AppSidenavLink :icon="['fas', 'calendar-days']" label="Schedule" link="/schedule" />
        <AppSidenavLink :icon="['fas', 'user-doctor']" label="Providers" link="/providers" disabled />
        <AppSidenavLink :icon="['fas', 'hospital-user']" label="Patients" link="/patients" disabled />
    </nav>
</template>