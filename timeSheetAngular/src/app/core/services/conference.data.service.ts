import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConferenceDataService {

    constructor(private http: HttpClient) { }

    public async getConferenceData() {
        return this.http.get(`${environment.apiUrl}/get-conference-home-data`).toPromise();
    }
}
