import { BaseEntity } from "./BaseEntity";


export class Doc extends BaseEntity {
    CollectionName: string = "";
    CreatedAt: string = "";
    CreatedBy: string = "";
    DeletedAt: string = "";
    DeletedBy: string = "";
    Id: string = "";
    IsDeleted: boolean = false;
    JsonData: string = "";
    Name: string = "";
    UpdatedAt: string = ""; 
    UpdatedBy: string = "";
}