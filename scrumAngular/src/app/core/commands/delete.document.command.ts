import { AppUser } from "../entities/app.user";

export class DeleteDocumentCommand {
    public id: string;
    public user: AppUser;
}
