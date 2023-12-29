import { NgFor, NgIf } from '@angular/common';
import { GetService } from './../services/get/get.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from '../services/msg/msg.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  partners: any[] = [];
  updateSucess: string = '';
  deleteSucess: string = '';


  constructor(private getservice:GetService, private route: Router, private msgService: MsgService){}

  ngOnInit(): void {

    this.msgService.getUpdateMenssage().subscribe(
      (message) => {
        this.updateSucess = message;
      }

    );

    setTimeout(() => {
      this.updateSucess = '';
    }, 3000);

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
      console.log('Parceiro excluído com sucesso.');

    } else {
      console.warn('A resposta contém um corpo inesperado:', response.body);

    }
  } catch (error) {

    console.error('Erro ao excluir parceiro:', error);
    this.getservice.getAllPartners().subscribe((partners) => {
      this.partners = partners;
      this.deleteSucess = 'Partner deleted successfully'
      setTimeout(() => {
        this.deleteSucess = '';
      }, 3000);
    });


  }
 }

  editPartner(partnerId: string) {
    this.route.navigate(['/edit', partnerId]);
  }

  getPartnerTypeLabel(partnerType: number): string {
    return partnerType === 1 ? 'Gold' : (partnerType === 2 ? 'Silver' : 'Unknown');
  }


}
