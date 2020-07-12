import { Doc } from "../Entities/Doc";

export class GetDocumentResponse extends Response
{
    public Document: Doc = new Doc();
}
