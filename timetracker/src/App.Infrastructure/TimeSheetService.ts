import axios from './node_modules/axios';
import { ITimeSheetService } from "../App.Core/Interfaces/TimeSheetService";
import { Project } from "../App.Core/Entities/Project";
import { RequireThat } from "../App.Core/Helpers/RequireThat";
import { NewRecordResponse } from "../App.Core/Responses/NewRecordResponse";

export class TimeSheetService implements ITimeSheetService{
    async addProject(record: Project): Promise<string> {
        RequireThat.ObjectNotNull(record,"record should be defined");

        // how do we implement the following


        // set body
        // set token - bearer stuff
        // how do we set the url's correctly?
        const rawResponse = await axios.post(
            'http://localhost:8000/AddDocument',
            { example: 'data' },
            { headers: { 'Content-Type': 'application/json' } }
          )
        
        console.log(rawResponse);
        return "fixme";
    }

}