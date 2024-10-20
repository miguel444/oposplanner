import { Component, OnInit } from '@angular/core';
import { Recompensa } from '../interfaces/recompensa';
import { MatDialog } from '@angular/material/dialog';
import { MostrarRecompensaComponent } from '../mostrar-recompensa/mostrar-recompensa.component';


@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.component.html',
  styleUrl: './recompensas.component.scss'
})
export class RecompensasComponent implements OnInit {

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  constructor(public dialog: MatDialog) {

  }

  // Simulamos un array de recompensas que podrían venir de un servicio
  recompensas = [
    { nombre: 'Recompensa 1', canjeado: true, fechaCanjeo: new Date('2023-05-01'),imagen: '/assets/merienda.png' },
    { nombre: 'Recompensa 2', canjeado: false, imagen: '/assets/merienda.png', descripcion: "Hola" },
    { nombre: 'Recompensa 3', canjeado: true, fechaCanjeo: new Date('2023-06-15'),imagen: '/assets/merienda.png' },
    { nombre: 'Recompensa 4', canjeado: false },
    { nombre: 'Recompensa 3', canjeado: true, fechaCanjeo: new Date('2023-06-15'),imagen: '/assets/merienda.png' },
    { nombre: 'Recompensa 3', canjeado: true, fechaCanjeo: new Date('2023-06-15'),imagen: '/assets/merienda.png' },
    { nombre: 'Recompensa 3', canjeado: true, fechaCanjeo: new Date('2023-06-15'),imagen: '/assets/merienda.png' }
  ];

  // Listas filtradas
  canjeadas: Recompensa[] = [];
  pendientes: Recompensa[] = [];

  // Columnas que se mostrarán en la tabla de Canjeadas
  displayedColumns: string[] = ['nombre', 'fechaCanjeo'];

  ngOnInit(): void {
    // Filtramos las recompensas
    this.canjeadas = this.recompensas.filter(r => r.canjeado === true).sort((a, b) => new Date(b.fechaCanjeo).getTime() - new Date(a.fechaCanjeo).getTime());
    this.pendientes = this.recompensas.filter(r => r.canjeado === false);
  }

  // Método para canjear una recompensa pendiente
  canjear(recompensa: Recompensa): void {
    const dialogRef = this.dialog.open(MostrarRecompensaComponent, {
      width: '30%',
      height: '70%',
      data: {
        recompensa
      }
    });

    // Suscribirse al evento 'afterClosed' para manejar el resultado
    dialogRef.componentInstance.canjearPremioEvento.subscribe((recompensa: Recompensa) => {
      this.marcarPremioComoCanjeado(recompensa);
    });

  }


  // Método para marcar el premio como canjeado
  marcarPremioComoCanjeado(recompensa: Recompensa) {
    recompensa.canjeado = true;
    recompensa.fechaCanjeo = new Date();
    this.actualizarListas();
  }

  // Actualizar las listas de premios canjeados y no canjeados
  actualizarListas() {
    this.canjeadas = this.recompensas.filter(r => r.canjeado === true).sort((a, b) => new Date(b.fechaCanjeo).getTime() - new Date(a.fechaCanjeo).getTime());
    this.pendientes = this.recompensas.filter(r => r.canjeado === false);
  }
  

}
