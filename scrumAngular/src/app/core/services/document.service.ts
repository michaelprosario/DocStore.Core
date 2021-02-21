import { AddDocumentCommand } from '../commands/add.document.command';
import { DeleteDocumentCommand } from '../commands/delete.document.command';
import { environment } from '../../../environments/environment';
import { GetDocumentQuery } from '../queries/get.document.query';
import { GetDocumentsByCollectionQuery } from '../queries/get.documents.by.collection.query';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreDocumentCommand } from '../commands/store.document.command';
import { UpdateDocumentCommand } from '../commands/update.document.command';

@Injectable({
    providedIn: 'root'
})
export class DocumentsService {

    constructor(private http: HttpClient) { }
    public async add(command: AddDocumentCommand) {
        if (!command) {
            throw new Error('Command is not defined');
        }

        return this.http.post(`${environment.apiUrl}/Documents/v1/AddDocument`, command).toPromise();
    }

    public async update(command: UpdateDocumentCommand) {
        if (!command) {
            throw new Error('Command is not defined');
        }

        return this.http.post(`${environment.apiUrl}/Documents/v1/EditDocument`, command).toPromise();
    }

    public async getAll(query: GetDocumentsByCollectionQuery) {
        if (!query) {
            throw new Error('query is not defined');
        }

        return this.http.post(`${environment.apiUrl}/Documents/v1/GetDocumentsByCollection/`, query).toPromise();
    }

    public async get(query: GetDocumentQuery) {
        if (!query) {
            throw new Error('query is not defined');
        }

        return this.http.post(`${environment.apiUrl}/Documents/v1/GetDocument`, query).toPromise();
    }

    public async delete(command: DeleteDocumentCommand) {
        if (!command) {
            throw new Error('command is not defined');
        }
        return this.http.post(`${environment.apiUrl}/Documents/v1/DeleteDocument`, command).toPromise();
    }

    public async store(command: StoreDocumentCommand) {
        if (!command) {
            throw new Error('command is not defined');
        }
        return this.http.post(`${environment.apiUrl}/Documents/v1/StoreDocument`, command).toPromise();
    }

}
