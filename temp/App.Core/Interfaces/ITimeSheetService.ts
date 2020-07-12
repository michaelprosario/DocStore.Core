import { Project } from "../Entities/Project";

export interface ITimeSheetService{
    addProject(record: Project): Promise<string>;
}