import { AppUser } from "../entities/app.user";
import { Doc } from "../entities/doc";

export class AddDocumentCommand {
    public document: Doc;
    public user: AppUser;
}
