import { AddDocumentCommand } from "../app.core/Requests/AddDocumentCommand";
import { Doc } from "../app.core/Entities/Doc";
import { IApplicationSettings } from "../app.core/Interfaces/IApplicationSettings";
import { ITimeSheetService } from "../app.core/Interfaces/ITimeSheetService";
import { Project } from "../app.core/Entities/Project";
import { RequireThat } from "../app.core/Helpers/RequireThat";
import axios from "axios";

export class TimeSheetService implements ITimeSheetService{
    
    constructor(private settings: IApplicationSettings){}
    
    async addProject(record: Project): Promise<string> {
        RequireThat.ObjectNotNull(record,"record should be defined");

        let command = new AddDocumentCommand();
        let doc = new Doc();
        doc.CollectionName = "project";
        doc.JsonData = JSON.stringify(record);
        doc.Name = record.Name;
        
        // set token - bearer stuff
        const rawResponse = await axios.post(
            this.settings.rootUrl + '/AddDocument',
            command,
            { headers: { 'Content-Type': 'application/json' } }
          )
        
        console.log(rawResponse);
        return "fixme";
    }

}