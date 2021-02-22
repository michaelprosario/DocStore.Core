import { AddDocumentCommand } from "../core/commands/add.document.command";
import { DeleteDocumentCommand } from "../core/commands/delete.document.command";
import { UpdateDocumentCommand } from "../core/commands/update.document.command";
import { Doc } from "../core/entities/doc";
import { GetDocumentQuery } from "../core/queries/get.document.query";
import { IGenericResponse } from "../core/responses/generic.response";
import { DocumentsService } from "../core/services/document.service";
import { Project, ProjectValidator } from "./edit-project";
import { IEditProjectView } from "./edit-project-view";

export class EditProjectViewModel {
  currentDocument: Doc;
  editingNewRecord: boolean;
  errors: string[];
  record: Project;
  recordId: string;
  recordName: string = "Project";
  statusText: string;
  viewModelReady: boolean;

  constructor
    (
      private view: IEditProjectView,
      private documentsService: DocumentsService
    ) { }

  public setupForm(newRecord: boolean) {
    this.editingNewRecord = true;
    this.errors = [];
    this.record = new Project();
    this.recordId = "";
    this.statusText = "";
    this.viewModelReady = false;

    if (newRecord) {
      this.editingNewRecord = true;
      this.view.setInfoBar("Add new project", this.view);
      this.viewModelReady = true;
      this.currentDocument = new Doc();
      this.currentDocument.collectionName = "Project";
    } else {
      this.recordId = this.view.getIdFromUrl();
      this.loadRecord();
    }
  }

  onDelete() {
    const command = new DeleteDocumentCommand();
    command.id = this.currentDocument.id;

    this.documentsService.delete(command)
      .then(data => {
        this.view.onClose();
      })
      .catch(errors => {
        this.view.displaySingleError(errors, this.view);
      });
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
        this.view.setInfoBar("Application errors occured. See console", this);
        console.log(errors);
      });
  }

  private loadRecordFromResponse(response: IGenericResponse) {
    this.recordId = response.document.id;
    this.currentDocument = response.document;
    this.record = JSON.parse(response.document.jsonData);
    this.viewModelReady = true;
    this.view.displayTimeStamp(response.document.createdBy, response.document.createdAt, this.view)
  }

  formIsOkay() {
    const results = new ProjectValidator().validate(this.record);
    this.errors = results.getFailureMessages();
    this.view.displayErrors(this.errors, this.view);
    return this.errors.length === 0;
  }

  private getDocFromForm() {
    const doc = this.currentDocument;
    doc.name = this.record.name;
    doc.jsonData = JSON.stringify(this.record);
    return doc;
  }

  public onSave(saveAndClose: boolean) {
    const currentContext = this;
    if (this.formIsOkay()) {
      const doc = this.getDocFromForm();

      if (this.editingNewRecord) {
        const command = new AddDocumentCommand();
        doc.createdAt = null;
        doc.updatedAt = null;
        doc.deletedAt = null;

        command.document = doc;
        this.documentsService.add(command).then(data => {
          const response = data as unknown as IGenericResponse;
          currentContext.recordId = response.recordId;
          currentContext.loadRecord();
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