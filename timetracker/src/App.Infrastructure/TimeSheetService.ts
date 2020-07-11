import { Project } from "../App.Core/Entities/Project";
import { RequireThat } from "../App.Core/Helpers/RequireThat";
import { NewRecordResponse } from "../App.Core/Responses/NewRecordResponse";
import { ITimeSheetService } from "../App.Core/Interfaces/ITimeSheetService";
import axios, { AxiosInstance } from "axios";
import { AddDocumentCommand } from "../App.Core/Requests/AddDocumentCommand";
import { Doc } from "../App.Core/Entities/Doc";
import { IApplicationSettings } from "../App.Core/Interfaces/IApplicationSettings";

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
        // how do we set the url's correctly?
        const rawResponse = await axios.post(
            this.settings.rootUrl + '/AddDocument',
            command,
            { headers: { 'Content-Type': 'application/json' } }
          )
        
        console.log(rawResponse);
        return "fixme";
    }

}