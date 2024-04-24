<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppSidenav from './shared/components/AppSidenav/AppSidenav.vue'
import AppTopBar from './shared/components/AppTopBar/AppTopBar.vue'
import './assets/icon-library'
</script>

<template>
    <div class="flex flex-row h-screen">
        <div class="grow-0">
            <AppSidenav />
        </div>

        <div class="grow-1 w-full">
            <AppTopBar />

            <!-- view height - height of AppTopBar -->
            <main class="h-[calc(100vh-3.5rem)] overflow-auto">
                <RouterView />
            </main>
        </div>
    </div>
</template>

<style scoped></style>
