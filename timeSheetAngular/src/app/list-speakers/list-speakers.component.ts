import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../core/services/document.service';
import { GetDocumentsByCollectionQuery } from '../core/queries/get.documents.by.collection.query';
import { IGenericResponse } from '../core/responses/generic.response';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-speakers',
  templateUrl: './list-speakers.component.html',
  styleUrls: ['./list-speakers.component.scss']
})
export class ListSpeakersComponent implements OnInit {

  records: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private docsService: DocumentsService
  ) { }

  ngOnInit() {
    const query = new GetDocumentsByCollectionQuery();
    query.collectionName = 'Speaker';

    this.docsService.getAll(query).then(serverResponse => {
      const response = serverResponse as unknown as IGenericResponse;
      this.records = response.data;
    }).catch(error => {
      console.log('Error on list document operation');
      console.log(error);
    })
  }

  onNewRecord() {
    this.router.navigate(['/newSpeaker']);
  }

  openRecord(recordId: string) {
    this.router.navigate(['/editSpeaker/' + recordId]);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
