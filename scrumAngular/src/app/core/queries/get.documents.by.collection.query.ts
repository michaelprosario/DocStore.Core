import { AppUser } from "../entities/app.user";

export class GetDocumentsByCollectionQuery {
    public collection: string;
    public user: AppUser;
}
