import { NgFor } from '@angular/common';
import { GetService } from './../services/get/get.service';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  partners: any[] = [];

  constructor(private getservice:GetService){}

  ngOnInit(): void {

    this.getservice.getAllPartners().subscribe(
      (data) => {
        this.partners = data;
      }
    );

  }

}
