import { AppUser } from "../entities/app.user";
import { Doc } from "../entities/doc";

export class StoreDocumentCommand {
    public document: Doc;
    public user: AppUser;
}
