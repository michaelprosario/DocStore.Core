import { AppUser } from "../entities/app.user";

export class GetDocumentQuery {
    public id: string = "";
    public user: AppUser = new AppUser();
}
