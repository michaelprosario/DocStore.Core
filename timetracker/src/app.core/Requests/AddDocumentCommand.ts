import { Doc } from "../Entities/Doc";
import { Request } from "./Request";

export class AddDocumentCommand extends Request {
    Document: Doc = new Doc();
}
