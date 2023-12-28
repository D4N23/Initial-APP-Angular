import { Component, OnInit } from '@angular/core';
import { Chart, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  // template: `
  //   <div class="row">
  //     <div class="col-md-12">
  //       <div class="card">
  //         <div class="card-header">
  //           <h5 class="card-title">Users Behavior</h5>
  //           <p class="card-category">24 Hours performance</p>
  //         </div>
  //         <div class="card-body">
  //           <canvas id="chartHours" width="400" height="100"></canvas>
  //         </div>
  //         <div class="card-footer">
  //           <hr>
  //           <div class="stats">
  //             <i class="fa fa-history"></i> Updated 3 minutes ago
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // `,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  // ngOnInit(): void {
  //   // Dados fictícios para o gráfico
  //   const data = {
  //     datasets: [{
  //       data: [10, 20, 30]
  //   }],

  //   // These labels appear in the legend and in the tooltips when hovering different arcs
  //   labels: [
  //       'Red',
  //       'Yellow',
  //       'Blue'
  //   ]
  //   };

  //   const options: ChartOptions = {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: 'top',
  //       },
  //       title: {
  //         display: true,
  //         text: 'Exemplo de Gráfico de Rosquinha',
  //       },
  //     },
  //   };

  //   // Criação do gráfico
  //   const ctx = document.getElementById('chartDoughnut') as HTMLCanvasElement;
  //   const chart = new Chart(ctx, {
  //     type: 'doughnut',
  //     data: data,
  //     options: options,
  //   });
  // }
}
