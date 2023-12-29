import { NgFor } from '@angular/common';
import { GetService } from './../services/get/get.service';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartOptions } from 'chart.js';
import { Router } from '@angular/router';

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

  editPartner(partnerId: string) {
    // Navegar para a página de edição com o ID do parceiro
    this.route.navigate(['/edit', partnerId]);
  }

}
