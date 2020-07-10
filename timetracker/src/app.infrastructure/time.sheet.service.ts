import axios from 'axios';
import { ITimeSheetService } from "../app.core/interfaces/time.sheet.service";
import { Project } from "../app.core/entities/project";
import { RequireThat } from "../app.core/helpers/require.that";
import { NewRecordResponse } from "../app.core/responses/new.record.response";

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