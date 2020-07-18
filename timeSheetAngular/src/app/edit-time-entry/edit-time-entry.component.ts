import { ActivatedRoute, Router } from '@angular/router';
import { AddDocumentCommand } from '../core/commands/add.document.command';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DeleteDocumentCommand } from '../core/commands/delete.document.command';
import { Doc } from '../core/entities/doc';
import { DocumentsService } from '../core/services/document.service';
import { GetDocumentQuery } from '../core/queries/get.document.query';
import { IGenericResponse } from '../core/responses/generic.response';
import { InfoBarComponent } from '../info-bar/info-bar.component';
import { TimeEntry, TimeEntryValidator } from './edit-time-entry';
import { UpdateDocumentCommand } from '../core/commands/update.document.command';
import * as moment from 'moment'; 

@Component({
  selector: 'app-edit-time-entry',
  templateUrl: './edit-time-entry.component.html'
})
export class EditTimeEntryComponent implements OnInit {

  @ViewChild(InfoBarComponent, { static: false }) infoBar: InfoBarComponent;

  currentDocument: Doc;
  editingNewRecord: boolean;
  errors: string[];
  record: TimeEntry;
  recordId: string;
  recordName: string = "TimeEntry";
  statusText: string;
  viewModelReady: boolean;

  constructor(
    private documentsService: DocumentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editingNewRecord = true;
    this.errors = [];
    this.record = new TimeEntry();
    this.recordId = "";
    this.statusText = "";
    this.viewModelReady = false;
  }

  ngOnInit() {
    this.setupForm();
  }

  private setCurrentOwnerId() {
    let userJson = localStorage.getItem("currentUser");
    let currentUser = JSON.parse(userJson);
    let currentUserId = currentUser.id;
    this.record.ownerId = currentUserId;
  }

  setupForm() {
    const url = this.router.url;
    if (url.startsWith('/newTimeEntry')) {
      this.setupNewRecord();
    } else if (url.startsWith('/editTimeEntry')) {
      this.recordId = this.route.snapshot.paramMap.get('id');
      this.loadRecord();
    }
  }

  private setupNewRecord() {
    this.setCurrentOwnerId();
    this.setTimeSheetId();
    this.editingNewRecord = true;
    const currentDate = moment().format("YYYY-MM-DD");
    this.record.entryDate = currentDate;
    setTimeout(x => this.infoBar.displayInfo("Add new TimeEntry"), 1000);
    this.viewModelReady = true;
  }

  private setTimeSheetId() {
    const timeSheetId = this.route.snapshot.paramMap.get('id');
    this.record.timeSheetId = timeSheetId;
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
        this.infoBar.displayInfo("Application errors occured. See console");
        console.log(errors);
      });
  }

  private loadRecordFromResponse(response: IGenericResponse) {
    this.recordId = response.document.id;
    this.currentDocument = response.document;
    this.record = JSON.parse(response.document.jsonData);
    this.viewModelReady = true;
    this.infoBar.displayTimeStamp(response.document.createdBy, response.document.createdAt)
  }

  afterSaveActions(context, saveAndClose) {
    context.infoBar.displayInfo("Record saved");
    if (saveAndClose) {
      context.onClose();
    }
  }

  logError(currentContext, error) {
    currentContext.infoBar.displayInfo("See console for errors");
    console.log(error);
  }

  onPostSave(saveAndClose: boolean) {
    const currentContext = this;
    if (this.formIsOkay()) {
      const doc = this.getDocFromRecord();

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
    this.router.navigate(['/listTimeEntrys/' + this.record.timeSheetId]);
  }

  private getDocFromRecord() {

    let doc = null;
    if(this.currentDocument)
    {
      doc = this.currentDocument;
    }else{
      doc = new Doc();
      doc.collectionName = "TimeEntry";
    }

    doc.jsonData = JSON.stringify(this.record);
    doc.name = this.record.projectCode + " / " + this.record.workItemId + " / " + this.record.entryDate;
    return doc;
  }

  formIsOkay() {
    const results = new TimeEntryValidator().validate(this.record);
    this.errors = results.getFailureMessages();
    this.infoBar.displayErrors(this.errors);
    return this.errors.length === 0;
  }

  onDelete() {
    if (confirm("Press OK to delete " + this.recordName)) {
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
    this.router.navigate(['/newTimeEntry']);
  }
}
