import { Doc } from "../Entities/Doc";

export interface UpdateDocumentCommand extends Request
{
    Document: Doc;
}
