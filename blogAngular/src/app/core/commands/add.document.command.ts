import { AppUser } from "../entities/app.user";
import { Doc } from "../entities/doc";

export class AddDocumentCommand {
    public document: Doc = new Doc();
    public user: AppUser = new AppUser();
}
