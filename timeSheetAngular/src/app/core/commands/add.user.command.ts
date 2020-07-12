import { AppUser } from "../entities/app.user";

export class AddUserCommand {
    constructor() {
        this.user = new AppUser();
        this.userToAdd = new AppUser();
    }

    public userToAdd: AppUser;
    public user: AppUser;
}
