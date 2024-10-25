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
  { nombre: 'Recompensa 1', canjeado: false, fechaCanjeo: new Date('2023-05-01'),imagen: '/assets/cena.png' },
  { nombre: 'Recompensa 2', canjeado: false, imagen: '/assets/merienda.png', descripcion: "Hola" },
  { nombre: 'Recompensa 3', canjeado: false, fechaCanjeo: new Date('2023-06-15'),imagen: '/assets/chuches.png' },
  { nombre: 'Recompensa 4', canjeado: false },
  { nombre: 'Recompensa 3', canjeado: false, fechaCanjeo: new Date('2023-06-15'),imagen: '/assets/cine.png' },
  { nombre: 'Recompensa 3', canjeado: false, fechaCanjeo: new Date('2023-06-15'),imagen: '/assets/ropa.png' },
  { nombre: 'Recompensa 3', canjeado: false, fechaCanjeo: new Date('2023-06-15'),imagen: '/assets/motivacion.png' }
];
