import { Role } from "../role";

export interface UserResponse {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    number: string;
    password: string;
    roles: Role[]
}