import { ConfigService } from './../config/config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  // private apiUrl = 'http://localhost:8080/partners';

  constructor(private http: HttpClient, private configService:ConfigService) { }

    //Registro de Partenrs
    registerPartner(data:any): Observable<any>{
      const apiUrl = `${this.configService.apiUrl}partners`
      return this.http.post(apiUrl, data);
    }

}
