import { Client } from "../types/client";

export const mockDatabase = {
    clients: [
        { id: 1, name: 'Alice', email: 'test1@test.com' },
        { id: 2, name: 'Besho', email: 'Ahmed1@test.com' },
        { id: 3, name: 'Abnb', email: 'Nouran1@test.com' },
        { id: 4, name: 'Sandra', email: 'mohanad@test.com' },
    ] as Client[]
}