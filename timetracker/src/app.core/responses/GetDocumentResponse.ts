import { Doc } from "../Entities/Doc";

export interface GetDocumentResponse extends Response
{
    Document: Doc;
}
