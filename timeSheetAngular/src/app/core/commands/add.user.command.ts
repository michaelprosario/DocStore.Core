import { AppUser } from "../entities/app.user";

export class AddUserCommand {
    constructor() {
    }

    firstName: string = '';
    lastName: string = '';
    userName: string = '';
    password: string = '';
}