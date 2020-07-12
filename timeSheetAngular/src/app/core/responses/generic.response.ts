export interface IGenericResponse {
    recordId: string;
    code: number;
    message: string;
    errors: string[];
    data: any;
}
