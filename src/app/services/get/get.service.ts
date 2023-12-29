import { ConfigService } from './../config/config.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
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

  getPartnerById(id: string): Observable<any>{
    const apiUrl = `${this.configService.apiUrl}partners/${id}`;
    return this.http.get(apiUrl);
  }

  updatePartner(id:string, partnerData: any): Observable<any>{
    const apiUrl = `${this.configService.apiUrl}partners/${id}`;
    return this.http.put(apiUrl, partnerData);
  }

  deletePartnerById(id: string): Observable<HttpResponse<any>>{
    const apiUrl = `${this.configService.apiUrl}partners/${id}`;
    return this.http.delete(apiUrl, {observe: 'response'});
  }

}
