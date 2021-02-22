import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DocumentsService } from '../core/services/document.service';
import { InfoBarComponent } from '../info-bar/info-bar.component';
import { EditProjectViewModel } from './edit-project.view-model';
import { IEditProjectView } from './edit-project-view';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html'
})
export class EditProjectComponent implements AfterViewInit, IEditProjectView {

  @ViewChild(InfoBarComponent, { static: false }) infoBar: InfoBarComponent;

  viewModel: EditProjectViewModel;

  constructor(
    private documentsService: DocumentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.viewModel = new EditProjectViewModel(this, this.documentsService);
  }
  ngAfterViewInit(): void {
    this.setupForm();
  }

  displaySingleError(error: any, context) {
    context.infoBar.displayErrors([error]);
  }

  displayErrors(errors: string[], context) {
    context.infoBar.displayErrors(errors);
  }

  displayTimeStamp(createdBy: string, createdAt: any, context) {
    context.infoBar.displayTimeStamp(createdBy, createdAt);
  }

  getIdFromUrl(): string {
    return this.route.snapshot.paramMap.get('id')
  }

  setInfoBar(message: string, context) {
    setTimeout(() => context.infoBar.displayInfo(message), 1000);
  }

  setupForm() {
    const url = this.router.url;
    let isNewRecord = url.startsWith('/newProject');
    this.viewModel.setupForm(isNewRecord);
  }

  afterSaveActions(saveAndClose) {
    this.infoBar.displayInfo("Record saved");
    if (saveAndClose) {
      this.onClose();
    }
  }

  logError(currentContext, error) {
    currentContext.infoBar.displayInfo("See console for errors");
    console.log(error);
  }

  onSave(saveAndClose: boolean) {
    this.viewModel.onSave(saveAndClose);
  }

  onClose() {
    this.router.navigate(['/listProjects']);
  }

  onDelete() {
    if (confirm("Press OK to delete ")) {      
      this.viewModel.onDelete();
    }
  }

  onNew() {
    this.router.navigate(['/newProject']);
  }
}
