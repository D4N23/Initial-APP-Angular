import { NgIf } from '@angular/common';
import { GetService } from './../services/get/get.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MsgService } from '../services/msg/msg.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

partnerId: string = '';
partner: any ={
  firstname: '',
      lastname: '',
      partnertype: '',
      cpf: ''
};
updateSucess: string ='';
updateError: string = '';

constructor(private activatedRoute: ActivatedRoute,
            private getService: GetService, private route: Router,
            private msgService: MsgService){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      this.partnerId = params['id'];
      this.loadPartner();
    });
  }

  loadPartner(): void {
    this.getService.getPartnerById(this.partnerId).subscribe((data) => {
      this.partner = data;
    });
  }

  updatePartner(): void{
    this.getService.updatePartner(this.partnerId, this.partner).subscribe(
      (response) =>{
        this.updateSucess = 'Partner Update';
        console.log('Partner Update', response);
        this.updateError = '';

        this.msgService.setUpdateMessage('Partner Update');

        this.route.navigate(['/dashboard']);
      },
      (error) =>{
        this.updateError = 'Partner not updated';
        console.log('Erro', error);
        this.updateSucess = '';
      }
    );
  }

  }




