import { ITimeSheetService } from '../interfaces/time.sheet.service';
import { NewRecordResponse } from '../responses/new.record.response';
import { Project } from '../entities/project';
import { RequireThat } from '../helpers/require.that';

export class AddProjectCommand {
    public Project: Project = new Project();
}

export class AddProjectService {

    constructor(private timeSheetService: ITimeSheetService){

    }
    public execute(command: AddProjectCommand): NewRecordResponse {
        RequireThat.ObjectNotNull(command, "Command should not be null");

        let response = new NewRecordResponse();
        response.ResponseCode = 200;

        let recordId = this.timeSheetService.addProject(command.Project);
        response.RecordId = recordId;
        return response;
    }
    
}