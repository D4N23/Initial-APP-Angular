import { ConfigService } from './../config/config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http: HttpClient, private configService:ConfigService) { }

  //Busca todos os Partners
  getAllPartners(): Observable<any[]>{
    const apiUrl = `${this.configService.apiUrl}partners`;
    return this.http.get<any[]>(apiUrl);
  }
}
