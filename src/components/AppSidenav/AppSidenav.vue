<script setup lang="ts">
import { RouteName } from '@/router'
import AppSidenavLink from './AppSidenavLink.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateTo(route: RouteName): void {
    router.push({ name: route })
}

function isActive(route: RouteName): boolean {
    return router.currentRoute.value.name === route
}
</script>

<template>
    <nav class="bg-primary h-full p text-primary-contrast">
        <AppSidenavLink
            :icon="['fas', 'calendar-days']"
            label="Schedule"
            :active="isActive(RouteName.SCHEDULE)"
            @click="navigateTo(RouteName.SCHEDULE)"
        />

        <AppSidenavLink
            :icon="['fas', 'hospital-user']"
            label="Patients"
            :active="isActive(RouteName.PATIENTS)"
            @click="navigateTo(RouteName.PATIENTS)"
        />

        <AppSidenavLink
            :icon="['fas', 'user-doctor']"
            label="Providers"
            :active="isActive(RouteName.PROVIDERS)"
            @click="navigateTo(RouteName.PROVIDERS)"
            disabled
        />
    </nav>
</template>
