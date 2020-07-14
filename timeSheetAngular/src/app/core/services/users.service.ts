import { AddUserCommand } from "../commands/add.user.command";
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../responses/login.response';
import { UserJwtToken } from '../entities/user.jwt.token';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) { }
    public async add(command: AddUserCommand) {
        if (!command) {
            throw new Error("Command is not defined");
        }

        return this.http.post(`${environment.apiUrl}/Users/RegisterUser`, command).toPromise();
    }

    async login(username: string, password: string) {
        
        let loginResponse = await this.http.post<any>(`${environment.apiUrl}/Users/Authenticate`, { username: username, password: password }).toPromise()
            .then(response => {
                // login successful if there's a jwt token in the response
                if (response.success && response.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    const userToken = new UserJwtToken(username, response.token);
                    localStorage.setItem('currentUser', JSON.stringify(userToken));
                    return new LoginResponse(true, "ok");
                } else {
                    return new LoginResponse(false, "Enter valid user name and password");
                }
            })
            .catch(e => {
                console.debug(e);
                return new LoginResponse(false, "Enter valid user name and password");
            });

        return loginResponse;
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
