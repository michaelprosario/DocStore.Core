import { AppUser } from "../entities/app.user";
import { Doc } from "../entities/doc";

export class UpdateDocumentCommand {
    public document: Doc = new Doc()
    public user: AppUser = new AppUser();
}
