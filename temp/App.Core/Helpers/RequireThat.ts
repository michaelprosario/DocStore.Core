export class RequireThat{
    public static ObjectNotNull(obj: any, message: string){
        if(!obj){
            throw new Error(message);
        }
    }
}