import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    url = 'http://localhost:3000/api'
    constructor(private http: HttpClient) { }
    getMessage() {
        return this.http.get(
            `${this.url}/message`);
    }
}