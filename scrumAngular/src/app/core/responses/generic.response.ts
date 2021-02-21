export interface IGenericResponse {
    recordId: string;
    code: number;
    message: string;
    errors: string[];
    document: any;
}
