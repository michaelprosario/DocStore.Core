export class RequireThat{
    public static ObjectNotNull(obj, message){
        if(!obj){
            throw new Error(message);
        }
    }
}