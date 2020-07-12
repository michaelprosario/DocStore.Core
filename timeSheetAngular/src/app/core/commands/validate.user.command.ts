import { AppUser } from "../entities/app.user";

export class ValidateUserCommand {
    public userId: string;
    public user: AppUser;
}
