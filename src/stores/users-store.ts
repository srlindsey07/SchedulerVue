import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { UserRole, type User } from '@/shared/types/user-models'

import userData from '@/data/users.json'

export const useUsersStore = defineStore('users', () => {
    // state
    const users = ref<User[]>([])

    // getters
    const providers = computed(() =>
        users.value.filter((user) => user.role === UserRole.PROVIDER),
    )

    // actions
    function fetchUsers() {
        users.value = userData as User[]
    }

    return { users, providers, fetchUsers }
})
