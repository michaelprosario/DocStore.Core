import { Injectable } from '@angular/core';
import { DocumentsService } from '../core/services/document.service';
import { GetDocumentsByCollectionQuery } from '../core/queries/get.documents.by.collection.query';
import { IDocumentListResponse } from '../core/responses/document.list.response';
import { IListPostView } from './list-post-view';

export class ListPostPresenter {

  constructor(private docsService: DocumentsService, private view: IListPostView) { }

  getRecordsFromServer() {
    const query = new GetDocumentsByCollectionQuery();
    query.collection = 'Post';

    this.docsService.getAll(query).then(serverResponse => {
      const response = serverResponse as unknown as IDocumentListResponse;
      this.view.setRecords(response.documents);
    }).catch(error => {
      console.log('Error on list document operation');
      console.log(error);
    });
  }
}
