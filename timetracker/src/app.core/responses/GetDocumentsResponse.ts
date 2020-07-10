import { Doc } from "../Entities/Doc";

export interface GetDocumentsResponse extends Response
{
    Documents: Doc[];
}
