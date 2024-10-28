import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const recompensasActuales = localStorage.getItem('recompensas');
    if (!recompensasActuales) {
      localStorage.setItem('recompensas', JSON.stringify(recompensas));
    }

  }
}

const recompensas = [
  { nombre: 'Recompensa 1', canjeado: false, fechaCanjeo: new Date('2023-05-01'),imagen: '/assets/cena.png',descripcion: "Es hora de arreglarse y salir a cenar." },
  { nombre: 'Recompensa 2', canjeado: false, imagen: '/assets/merienda.png', descripcion:  "Pues que mejor que un merienda para amenizar la tarde." },
  { nombre: 'Recompensa 3', canjeado: false, fechaCanjeo: new Date('2023-06-15'),imagen: '/assets/chuches.png',descripcion:  "Premio de bienvenida. No hagas trampas con los siguientes premios." },
  { nombre: 'Recompensa 4', canjeado: false },
  { nombre: 'Recompensa 3', canjeado: false, fechaCanjeo: new Date('2023-06-15'),imagen: '/assets/cine.png',descripcion:  "Es momento de disfrutar de una bolsa de palominas viendo una peli." },
  { nombre: 'Recompensa 3', canjeado: false, fechaCanjeo: new Date('2023-06-15'),imagen: '/assets/ropa.png',descripcion:  "Aqui me equivoqué... Vamos de compras pero no te pases." },
  { nombre: 'Recompensa 3', canjeado: false, fechaCanjeo: new Date('2023-06-15'),imagen: '/assets/motivacion.png',descripcion:  "SORPRESA, sientate y disfruta." },
];
