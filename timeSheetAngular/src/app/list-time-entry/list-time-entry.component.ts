import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentsService } from '../core/services/document.service';
import { GetDocumentsByCollectionQuery } from '../core/queries/get.documents.by.collection.query';
import { IDocumentListResponse } from '../core/responses/document.list.response';

@Component({
  selector: 'app-list-time-entry',
  templateUrl: './list-time-entry.component.html'
})
export class ListTimeEntryComponent implements OnInit {
  records: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private docsService: DocumentsService
  ) { }

  ngOnInit() {
    const query = new GetDocumentsByCollectionQuery();
    query.collection = 'TimeEntry';

    this.docsService.getAll(query).then(serverResponse => {
      const response = serverResponse as unknown as IDocumentListResponse;
      this.records = response.documents;
    }).catch(error => {
      console.log('Error on list document operation');
      console.log(error);
    })
  }

  onNewRecord() {
    this.router.navigate(['/newTimeEntry']);
  }

  openRecord(recordId: string) {
    this.router.navigate(['/editTimeEntry/' + recordId]);
  }
}
