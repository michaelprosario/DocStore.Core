import { AddDocumentCommand } from '../core/commands/add.document.command';
import { DeleteDocumentCommand } from '../core/commands/delete.document.command';
import { Doc } from '../core/entities/doc';
import { DocumentsService } from '../core/services/document.service';
import { GetDocumentQuery } from '../core/queries/get.document.query';
import { IEditPostView } from './edit-post-view';
import { IGenericResponse } from '../core/responses/generic.response';
import { Post, PostValidator } from './edit-post';
import { UpdateDocumentCommand } from '../core/commands/update.document.command';
import { v4 as uuidv4 } from 'uuid';

export class EditPostPresenter {
  currentDocument: Doc = new Doc();
  editingNewRecord: boolean = true;
  errors: string[] = [];
  record: Post = new Post();
  recordId: string = "";
  currentUser: any;

  constructor(
    private view: IEditPostView,
    private documentsService: DocumentsService
  ) { }

  setupModel(handleNewRecord: boolean) {
    if (handleNewRecord) {
      this.currentUser = this.view.getCurrentUser();
      this.editingNewRecord = true;
      this.record.id = uuidv4();
      this.view.displayInfo("Add new post");
    } else {
      this.recordId = this.view.getPropertyFromUrl('id');
      this.loadRecord();
      this.view.displayInfo("Edit post");
    }
  }

  loadRecord() {
    this.editingNewRecord = false;
    const query = new GetDocumentQuery();
    query.id = this.recordId;
    this.documentsService.get(query)
      .then(data => {
        const response = data as unknown as IGenericResponse;
        this.loadRecordFromResponse(response);
      })
      .catch(errors => {
        this.view.displayInfo("Application errors occured. See console");
        console.log(errors);
      });
  }

  private loadRecordFromResponse(response: IGenericResponse) {
    this.recordId = response.document.id;
    this.currentDocument = response.document;
    this.record = JSON.parse(response.document.jsonData);
  }

  private getDocFromRecord() {
    const doc = this.currentDocument;
    doc.jsonData = JSON.stringify(this.record);
    doc.collectionName = "Post";
    doc.name = this.record.name;
    return doc;
  }

  formIsOkay() {    
    const validator = new PostValidator();
    const validationResults = validator.validate(this.record);
    console.log(validationResults)
    this.errors = validationResults.getFailureMessages();
    if(this.errors.length > 0) {
      this.view.displayErrors(this.errors);
    }

    return this.errors.length === 0;
  }

  deleteRecord() {
    const command = new DeleteDocumentCommand();
    command.id = this.currentDocument.id;

    this.documentsService.delete(command)
      .then(data => {
        this.view.onClose();
      })
      .catch(errors => {
        this.view.displayErrors(errors);
      });
  }

  onSave(saveAndClose: boolean) {

    if (this.formIsOkay()) {
      const doc = this.getDocFromRecord();

      if (this.editingNewRecord) {
        const command = new AddDocumentCommand();
        command.document = doc;
        
        this.documentsService.add(command).then(data => {
          
          // @ts-ignore
          if(!data || data.code !== 200){
            alert("Error saving record");
            console.log(data);
            return;
          }

          const response = data as unknown as IGenericResponse;
          this.recordId = response.recordId;
          this.loadRecord();
          this.view.afterSaveActions(saveAndClose);
        }).catch(error => {
          console.log(error);
        });
      } else {
        const command = new UpdateDocumentCommand();
        command.document = doc;
        this.documentsService.update(command).then(data => {
          this.view.afterSaveActions(saveAndClose);
        }).catch(error => {
          console.log(error);
        });
      }
    }
  }
}
