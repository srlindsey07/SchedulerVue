export class Name {
    first: string
    last: string

    constructor(first: string, last: string) {
        this.first = first
        this.last = last
    }

    public get fullName(): string {
        return this.first + ' ' + this.last
    }
}

export class ContactInfo {
    email: string
    mobile: string

    constructor(email: string, mobile: string) {
        this.email = email
        this.mobile = mobile
    }
}
