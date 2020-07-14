import { AddDocumentCommand } from '../commands/add.document.command';
import { DeleteDocumentCommand } from '../commands/delete.document.command';
import { environment } from '../../../environments/environment';
import { GetDocumentQuery } from '../queries/get.document.query';
import { GetDocumentsByCollectionQuery } from '../queries/get.documents.by.collection.query';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

        return this.http.post(`${environment.apiUrl}/add`, command).toPromise();
    }

    public async update(command: UpdateDocumentCommand) {
        if (!command) {
            throw new Error('Command is not defined');
        }

        return this.http.post(`${environment.apiUrl}/update`, command).toPromise();
    }

    public async getAll(query: GetDocumentsByCollectionQuery) {
        if (!query) {
            throw new Error('query is not defined');
        }

        return this.http.post(`${environment.apiUrl}/GetDocumentsByCollection/`, query).toPromise();
    }

    public async get(query: GetDocumentQuery) {
        if (!query) {
            throw new Error('query is not defined');
        }

        return this.http.post(`${environment.apiUrl}/get/` + query.id, query).toPromise();
    }

    public async delete(command: DeleteDocumentCommand) {
        if (!command) {
            throw new Error('command is not defined');
        }

        return this.http.post(`${environment.apiUrl}/delete/` + command.id, command).toPromise();
    }
}
