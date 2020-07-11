import { ITimeSheetService } from '../Interfaces/ITimeSheetService';
import { NewRecordResponse } from '../Responses/NewRecordResponse';
import { Project } from '../Entities/Project';
import { RequireThat } from '../Helpers/RequireThat';
import HTTPStatusCode from '../Enums/HttpStatusCode';

export class AddProjectCommand {
    public Project: Project = new Project();
}

export class AddProjectService {

    constructor(private timeSheetService: ITimeSheetService){}

    public async execute(command: AddProjectCommand): Promise<NewRecordResponse> {
        RequireThat.ObjectNotNull(command, "Command should not be null");

        let response = new NewRecordResponse();
        response.ResponseCode = HTTPStatusCode.OK;

        let recordId = await this.timeSheetService.addProject(command.Project);
        response.RecordId = recordId;
        return response;
    }
}