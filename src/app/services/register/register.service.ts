import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:8080/partners';

  constructor(private http: HttpClient) { }

    //Registro de Partenrs
    registerPartner(data:any): Observable<any>{
      return this.http.post(this.apiUrl, data);
    }

}
