import { AppUser } from "../entities/app.user";

export class DeleteUserCommand {
    public id: string;
    public user: AppUser;
}
