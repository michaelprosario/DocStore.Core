import { Doc } from "../Entities/Doc";

export interface AddDocumentCommand extends Request {
    Document: Doc;
}
