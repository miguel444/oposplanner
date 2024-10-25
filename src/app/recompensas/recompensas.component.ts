import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recompensa } from '../interfaces/recompensa';
import { MatDialog } from '@angular/material/dialog';
import { MostrarRecompensaComponent } from '../mostrar-recompensa/mostrar-recompensa.component';


@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.component.html',
  styleUrl: './recompensas.component.scss'
})
export class RecompensasComponent implements OnInit,OnDestroy {

  
  constructor(public dialog: MatDialog) {

  }

  canjeadas: Recompensa[] = [];
  pendientes: Recompensa[] = [];
  recompensas: Recompensa[] = [];

  displayedColumns: string[] = ['nombre', 'fechaCanjeo'];

  ngOnInit(): void {
    let recompensasActualesString = localStorage.getItem('recompensas');
    let recompensasCargadas = recompensasActualesString ? JSON.parse(recompensasActualesString) : [];
    this.recompensas = recompensasCargadas;
    this.canjeadas = this.recompensas.filter((r: Recompensa) => r.canjeado === true).sort((a:Recompensa, b:Recompensa) => new Date(b.fechaCanjeo).getTime() - new Date(a.fechaCanjeo).getTime());
    this.pendientes = this.recompensas.filter((r: Recompensa) => r.canjeado === false);
  }

  ngOnDestroy(): void {
    localStorage.setItem('recompensas', JSON.stringify(this.recompensas));
  }

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
