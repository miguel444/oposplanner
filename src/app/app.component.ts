import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FelicitacionComponent } from './felicitacion/felicitacion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private dialog: MatDialog) {}


  ngOnInit(): void {
    const recompensasActuales = localStorage.getItem('recompensas');
    if (!recompensasActuales) {
      localStorage.setItem('recompensas', JSON.stringify(recompensas));
    }

    const today = new Date();
    const targetDate = new Date(today.getFullYear(), 9, 30);

    if (today.getDate() === targetDate.getDate() && today.getMonth() === targetDate.getMonth()) {
      this.openBirthdayDialog();
    }

  }

  openBirthdayDialog() {
    this.dialog.open(FelicitacionComponent, {
      width: '400px',
      disableClose: false,
    });
  }
}

const recompensas = [
  { nombre: 'Recompensa 1', disponible: false, canjeado: false, imagen: '/assets/cena.png', descripcion: "Es hora de arreglarse y salir a cenar.", temas_para_desbloquear: 15 },
  { nombre: 'Recompensa 2', disponible: false, canjeado: false, imagen: '/assets/merienda.png', descripcion: "Pues que mejor que un merienda para amenizar la tarde.", temas_para_desbloquear: 3 },
  { nombre: 'Recompensa 3', disponible: true, canjeado: false, imagen: '/assets/chuches.png', descripcion: "Premio de bienvenida. No hagas trampas con los siguientes premios.", temas_para_desbloquear: 0 },
  { nombre: 'Recompensa 4', disponible: false, canjeado: false, imagen: '/assets/cine.png', descripcion: "Es momento de disfrutar de una bolsa de palominas viendo una peli.", temas_para_desbloquear: 8 },
  { nombre: 'Recompensa 5', disponible: false, canjeado: false, imagen: '/assets/ropa.png', descripcion: "Aqui me equivoqué... Vamos de compras pero no te pases.", temas_para_desbloquear: 30 },
  { nombre: 'Recompensa 6', disponible: false, canjeado: false, imagen: '/assets/motivacion.png', descripcion: "SORPRESA, sientate y disfruta. Reenviame esta carta", temas_para_desbloquear: 23 },
];
