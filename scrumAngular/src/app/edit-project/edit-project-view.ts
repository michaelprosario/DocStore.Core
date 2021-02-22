export interface IEditProjectView
{
    afterSaveActions(saveAndClose: any);
    displayErrors(errors: string[], view);
    displaySingleError(errors: any, view);
    displayTimeStamp(createdBy: string, createdAt: any, view);
    getIdFromUrl(): string;    
    onClose();
    setInfoBar(message: string, view);
}