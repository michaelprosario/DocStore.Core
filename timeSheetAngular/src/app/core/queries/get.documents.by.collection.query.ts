import { AppUser } from "../entities/app.user";

export class GetDocumentsByCollectionQuery {
    public collectionName: string;
    public user: AppUser;
}
