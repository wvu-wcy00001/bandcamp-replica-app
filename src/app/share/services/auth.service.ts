import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const baseurl: string = "https://identitytoolkit.googleapis.com/v1/accounts";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private httpc: HttpClient) {}

    login(email: string, password: string) {
        const loginEndpoint: string = "signInWithPassword";
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        }

        return this.httpc.post(baseurl + ':' + loginEndpoint + '?key=' + environment.firebase.apiKey, requestBody);
    }

    signup(email: string, password: string) {
        const signupEndpoint: string = "signUp";
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        }

        return this.httpc.post(baseurl + ':' + signupEndpoint + '?key=' + environment.firebase.apiKey, requestBody);
    }
}
