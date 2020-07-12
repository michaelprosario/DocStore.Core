import { IGenericResponse } from "../responses/generic.response";

export class Responses {
    public static getResponse(message: string, code: number): IGenericResponse {
        const response: IGenericResponse = { message: "", code: 20, recordId: "", errors: [], data: null };
        response.message = message;
        response.code = code;
        return response;
    }
}
