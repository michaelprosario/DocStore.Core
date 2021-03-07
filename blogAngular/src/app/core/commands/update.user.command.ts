import { AppUser } from "../entities/app.user";

export class UpdateUserCommand {
    public userToUpdate: AppUser;
    public user: AppUser;
}
