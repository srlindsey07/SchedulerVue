import { User } from '@/shared/types/user-models'

export const mockUsers = [
    {
        id: '65ff4be0fc13ae7d2050fa9c',
        name: { first: 'Rivy', last: 'Thomassin' },
        role: 'SCHEDULER',
        contact: {
            email: 'rthomassin0@webnode.com',
            mobile: '199-295-6111',
        },
    },
    {
        id: '65ff4be0fc13ae7d2050fa9d',
        name: { first: 'Devlin', last: 'Treadaway' },
        role: 'PROVIDER',
        contact: {
            email: 'dtreadaway1@nsw.gov.au',
            mobile: '817-181-7224',
        },
    },
    {
        id: '65ff4be0fc13ae7d2050fa9e',
        name: { first: 'Aloysia', last: 'Fippe' },
        role: 'PROVIDER',
        contact: {
            email: 'afippe2@prnewswire.com',
            mobile: '180-202-1465',
        },
    },
    {
        id: '65ff4be0fc13ae7d2050fa9f',
        name: { first: 'Urbano', last: 'Sheber' },
        role: 'SCHEDULER',
        contact: { email: 'usheber3@ustream.tv', mobile: '674-225-6264' },
    },
    {
        id: '65ff4be0fc13ae7d2050faa0',
        name: { first: 'Rakel', last: 'Feldman' },
        role: 'PROVIDER',
        contact: { email: 'rfeldman4@google.ca', mobile: '199-898-9685' },
    },
    {
        id: '65ff4be0fc13ae7d2050faa1',
        name: { first: 'Cammi', last: 'Cline' },
        role: 'PROVIDER',
        contact: {
            email: 'ccline5@technorati.com',
            mobile: '798-701-4773',
        },
    },
    {
        id: '65ff4be0fc13ae7d2050faa2',
        name: { first: 'Nataniel', last: 'Aucott' },
        role: 'PROVIDER',
        contact: { email: 'naucott6@umich.edu', mobile: '819-145-7627' },
    },
    {
        id: '65ff4c07fc13ae7aed50faa1',
        name: { first: 'Garvy', last: 'Wharram' },
        role: 'ADMIN',
        contact: { email: 'gwharram0@tamu.edu', mobile: '433-433-4679' },
    },
] as User[]

export const mockProviders = [
    {
        id: '65ff4be0fc13ae7d2050faa0',
        name: { first: 'Rakel', last: 'Feldman' },
        role: 'PROVIDER',
        contact: { email: 'rfeldman4@google.ca', mobile: '199-898-9685' },
    },
    {
        id: '65ff4be0fc13ae7d2050faa1',
        name: { first: 'Cammi', last: 'Cline' },
        role: 'PROVIDER',
        contact: {
            email: 'ccline5@technorati.com',
            mobile: '798-701-4773',
        },
    },
    {
        id: '65ff4be0fc13ae7d2050faa2',
        name: { first: 'Nataniel', last: 'Aucott' },
        role: 'PROVIDER',
        contact: { email: 'naucott6@umich.edu', mobile: '819-145-7627' },
    },
] as User[]
