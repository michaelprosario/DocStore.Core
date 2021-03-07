import { ActivatedRoute, Router } from '@angular/router';
import { AddDocumentCommand } from '../core/commands/add.document.command';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DeleteDocumentCommand } from '../core/commands/delete.document.command';
import { Doc } from '../core/entities/doc';
import { DocumentsService } from '../core/services/document.service';
import { GetDocumentQuery } from '../core/queries/get.document.query';
import { IGenericResponse } from '../core/responses/generic.response';
import { Post, PostValidator } from './edit-post';
import { UpdateDocumentCommand } from '../core/commands/update.document.command';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html'
})
export class EditPostComponent implements OnInit { 
  currentDocument: Doc = new Doc();
  editingNewRecord: boolean;
  errors: string[];
  record: Post;
  recordId: string;
  viewModelReady: boolean;

  constructor(
    private documentsService: DocumentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editingNewRecord = true;
    this.errors = [];
    this.record = new Post();
    this.recordId = "";    
    this.viewModelReady = false;
  }

  ngOnInit() {
    this.setupForm();
  }

  private setCurrentOwnerId() {
    let userJson = localStorage.getItem("currentUser") || "{}";
    let currentUser = JSON.parse(userJson);
    let currentUserId = currentUser.id;    
  }

  setupForm() {
    const url = this.router.url;
    if (url.startsWith('/newPost')) {
      this.setCurrentOwnerId();
      this.editingNewRecord = true;
      this.displayInfo("Add new Post");
      this.viewModelReady = true;
    } else if (url.startsWith('/editPost')) {
      this.recordId = this.route.snapshot.paramMap.get('id') || '';
      this.loadRecord();
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
        this.displayInfo("Application errors occured. See console");
        console.log(errors);
      });
  }

  private loadRecordFromResponse(response: IGenericResponse) {
    this.recordId = response.document.id;
    this.currentDocument = response.document;
    this.record = JSON.parse(response.document.jsonData);
    this.viewModelReady = true;    
  }

  displayInfo(messag: string){
    alert(messag);
  }

  afterSaveActions(context: any, saveAndClose: boolean): void {
    context.displayInfo("Record saved");
    if (saveAndClose) {
      context.onClose();
    }
  }

  logError(currentContext: any, error: string) {
    currentContext.displayInfo("See console for errors");
    console.log(error);
  }

  onPostSave(saveAndClose: boolean) {
    const currentContext = this;
    if (this.formIsOkay()) {
      const doc = this.getDocFromRecord();

      if (this.editingNewRecord) {
        const command = new AddDocumentCommand();
        doc.createdAt = null || "";
        doc.updatedAt = null || "";
        doc.deletedAt = null || "";
        command.document = doc;
        this.documentsService.add(command).then(data => {
          const response = data as unknown as IGenericResponse;
          currentContext.recordId = response.recordId;
          currentContext.loadRecord();
          this.afterSaveActions(currentContext, saveAndClose);
        }).catch(error => {
          this.logError(currentContext, error);
        });
      } else {
        const command = new UpdateDocumentCommand();
        command.document = doc;
        this.documentsService.update(command).then(data => {
          this.afterSaveActions(currentContext, saveAndClose);
        }).catch(error => {
          this.logError(currentContext, error);
        });
      }
    }
  }

  onClose() {
    this.router.navigate(['/listPosts']);
  }

  private getDocFromRecord() {
    const doc = this.currentDocument;
    doc.jsonData = JSON.stringify(this.record);    
    return doc;
  }

  formIsOkay() {
    const results = new PostValidator().validate(this.record);
    this.errors = results.getFailureMessages();
    this.displayErrors(this.errors);
    return this.errors.length === 0;
  }

  displayErrors(errors: string[]){
    console.log("errors.....");
    console.log(errors);
  }

  onDelete() {
    if (confirm("Click OK to delete this record")) {
      const command = new DeleteDocumentCommand();
      command.id = this.currentDocument.id;

      this.documentsService.delete(command)
        .then(data => {
          this.onClose();
        })
        .catch(errors => {
          this.logError(this, errors);
        });
    }
  }

  onNew() {
    this.router.navigate(['/newPost']);
  }
}
