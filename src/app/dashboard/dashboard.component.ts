import { NgFor } from '@angular/common';
import { GetService } from './../services/get/get.service';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartOptions } from 'chart.js';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  partners: any[] = [];


  constructor(private getservice:GetService, private route: Router){}

  ngOnInit(): void {

    this.getservice.getAllPartners().subscribe(
      (data) => {
        this.partners = data;
      }
    );
  }

 deletePartnerById(partnerId: string){
      this.getservice.deletePartnerById(partnerId).subscribe(
        (response: HttpResponse<any>)=>{
          console.log('Partner desativado');

          const index = this.partners.findIndex((p)=> p.idpartner === partnerId);
          if(index !== -1){
            this.partners.splice(index, 1);
          }
        },
        (error) =>{
          console.error('Erro', error);
        }
      )
 }


  editPartner(partnerId: string) {
    // Navegar para a página de edição com o ID do parceiro
    this.route.navigate(['/edit', partnerId]);
  }



}
