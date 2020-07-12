import { Doc } from "../Entities/Doc";

export class GetDocumentsResponse extends Response
{
    public Documents: Doc[] = new Array<Doc>();
}
