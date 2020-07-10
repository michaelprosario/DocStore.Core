import { AddProjectCommand } from "../use.cases/add.project.service";
import { NewRecordResponse } from "../responses/new.record.response";
import { Project } from "../entities/project";

export interface ITimeSheetService{
    addProject(record: Project): Promise<string>;
}