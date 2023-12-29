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

 async deletePartnerById(partnerId: string){
  try {
    const response = await this.getservice.deletePartnerById(partnerId).toPromise();

    if (!response?.body) {
      // Se o corpo da resposta estiver vazio, considerar como um sucesso
      console.log('Parceiro excluído com sucesso.');

      this.getservice.getAllPartners().subscribe((partners) => {
        this.partners = partners;
      });

    } else {
      // Se o corpo da resposta não estiver vazio, exibir uma mensagem de aviso
      console.warn('A resposta contém um corpo inesperado:', response.body);
    }
  } catch (error) {
    // Ocorreu um erro durante a exclusão
    console.error('Erro ao excluir parceiro:', error);
    // Adicione o tratamento de erro conforme necessário.
  }
 }


  editPartner(partnerId: string) {
    // Navegar para a página de edição com o ID do parceiro
    this.route.navigate(['/edit', partnerId]);
  }



}
