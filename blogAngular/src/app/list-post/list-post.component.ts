import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentsService } from '../core/services/document.service';
import { IListPostView } from './list-post-view';
import { ListPostPresenter } from './list-post-presenter';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html'
})
export class ListPostComponent implements OnInit,IListPostView {
  records: any[] = [];
  presenter: ListPostPresenter; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private docsService: DocumentsService    
  ) {
    this.presenter = new ListPostPresenter(docsService, this);
  }

  ngOnInit() {   
    this.presenter.getRecordsFromServer();
  }

  setRecords(records: []){
    this.records = records;
  }

  onNewRecord() {
    this.router.navigate(['/app/new-post']);
  }

  openRecord(recordId: string) {
    this.router.navigate(['/app/edit-post/' + recordId]);
  }
}
