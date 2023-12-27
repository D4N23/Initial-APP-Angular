import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'http://localhost:8080'//url do back-end

    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<any> {
      const credentials = {email, password};
      return this.http.post(`${this.apiUrl}/login`, credentials);
    }
}
