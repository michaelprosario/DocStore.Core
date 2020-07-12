import { Doc } from "../Entities/Doc";
import { Request } from "./Request";

export class UpdateDocumentCommand extends Request
{
    public Document: Doc = new Doc();
}
