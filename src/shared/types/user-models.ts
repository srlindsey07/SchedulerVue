import type { ContactInfo, Name } from "./shared-models"

export class User {
    id: string
    name: Name
    role: UserRole
    contact: ContactInfo

    constructor(id: string, name: Name, role: UserRole, contact: ContactInfo) {
        this.id = id
        this.name = name
        this.role = role
        this.contact = contact
    }
}

export enum UserRole {
    SCHEDULER = 'SCHEDULER',
    PROVIDER = 'PROVIDER',
    ADMIN = 'ADMIN',
}