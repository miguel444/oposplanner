import { Component, OnInit } from '@angular/core';

interface Recompensa {
  nombre: string;
  canjeado: boolean;
  fechaCanjeo?: Date; // Fecha es opcional
}

@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.component.html',
  styleUrl: './recompensas.component.scss'
})
export class RecompensasComponent implements OnInit{
  // Simulamos un array de recompensas que podrían venir de un servicio
  recompensas = [
    { nombre: 'Recompensa 1', canjeado: true, fechaCanjeo: new Date('2023-05-01') },
    { nombre: 'Recompensa 2', canjeado: false },
    { nombre: 'Recompensa 3', canjeado: true, fechaCanjeo: new Date('2023-06-15') },
    { nombre: 'Recompensa 4', canjeado: false }
  ];

  // Listas filtradas
  canjeadas: Recompensa[] = [];
  pendientes: Recompensa[] = [];

  // Columnas que se mostrarán en la tabla de Canjeadas
  displayedColumns: string[] = ['nombre', 'fechaCanjeo'];

  ngOnInit(): void {
    // Filtramos las recompensas
    this.canjeadas = this.recompensas.filter(r => r.canjeado === true);
    this.pendientes = this.recompensas.filter(r => r.canjeado === false);
  }

  // Método para canjear una recompensa pendiente
  canjear(recompensa: Recompensa): void {
    // Aquí agregas la lógica para cambiar el estado de la recompensa
    recompensa.canjeado = true;
    recompensa.fechaCanjeo = new Date(); // Asignamos la fecha actual
    // Actualizamos las listas
    this.ngOnInit();
  }

}
