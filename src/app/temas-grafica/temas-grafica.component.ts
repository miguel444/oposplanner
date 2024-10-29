import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tema } from '../interfaces/tema';

@Component({
  selector: 'app-temas-grafica',
  templateUrl: './temas-grafica.component.html',
  styleUrl: './temas-grafica.component.scss'
})
export class TemasGraficaComponent implements OnInit, OnChanges  {

  @Input() temas: Tema[];

  public barChartData: any[] = [];
  public barChartLabels: string[] = [];
  public barChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'category', // O 'linear' dependiendo de tu caso
        title: {
          display: false,
          text: 'Temas', // Título del eje X
        },
      },
      y: {
        title: {
          display: false,
          text: 'Número de Repasos', // Título del eje Y
        },
        beginAtZero: true, // Empieza en cero
      },
    },
  };
  public barChartType = 'bar';
  public barChartLegend = true;

  ngOnInit(): void {
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['temas']) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    const top10Temas = this.temas
    .filter(tema => tema.completado)
      .sort((a, b) => b.repasos - a.repasos)
      .slice(0, 5);
      
    this.barChartLabels = top10Temas.map(tema => "Tema "  + tema.numero);
    this.barChartData = [
      {
        data: top10Temas.map(tema => tema.repasos),
        label: 'Número de Repasos',
        backgroundColor: '#fd94bd',
        borderColor: '#1E88E5',
        hoverBackgroundColor: '#cf6e93',
      },
    ];
  }
}
