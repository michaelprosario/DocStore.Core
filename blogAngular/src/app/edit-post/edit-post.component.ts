import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentsService } from '../core/services/document.service';
import { Ensure } from '../core/services/ensure';
import { IEditPostView } from './edit-post-view';
import { EditPostPresenter } from './edit-post-presenter';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html'
})
export class EditPostComponent implements OnInit, IEditPostView { 
  
  presenter: EditPostPresenter;

  constructor(
    private documentsService: DocumentsService,
    private route: ActivatedRoute,
    private router: Router
  ) 
  {
    this.presenter = new EditPostPresenter(this, documentsService);    
  }

  ngOnInit() {
    this.setupForm();
  }

  getCurrentUser() {
    let userJson = localStorage.getItem("currentUser") || "{}";
    let currentUser = JSON.parse(userJson);
    return currentUser;
  }

  setupForm() {
    const url = this.router.url;
    const handleNewRecord = url.startsWith('/newPost');
    this.presenter.setupModel(handleNewRecord);
  }

  getPropertyFromUrl(property: string): string {
    Ensure.stringIsNotNullOrEmpty(property);
    return this.route.snapshot.paramMap.get(property) || '';
  }

  displayInfo(messag: string){
    alert(messag);
  }

  afterSaveActions(saveAndClose: boolean): void {
    this.displayInfo("Record saved");
    if (saveAndClose) {
      this.onClose();
    }
  }  

  onSave(saveAndClose: boolean): void {
    this.presenter.onSave(saveAndClose);
  }

  onClose() {
    this.router.navigate(['/listPosts']);
  }

  displayErrors(errors: string[]){
    console.log("errors.....");
    console.log(errors);
  }

  onDelete() {
    if (confirm("Click OK to delete this record")) {
      this.presenter.deleteRecord();
    }
  }

  onNew() {
    this.router.navigate(['/newPost']);
  }
}
