import { Component, OnInit } from '@angular/core';

interface Recompensa {
  nombre: string;
  canjeada: boolean;
  ganada: boolean;
}

@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.component.html',
  styleUrl: './recompensas.component.scss'
})
export class RecompensasComponent implements OnInit{
  recompensas: Recompensa[] = [];

  constructor() { }

  ngOnInit(): void {
    // Cargar las recompensas del Local Storage
    const recompensasGuardadas = localStorage.getItem('recompensas');
    if (recompensasGuardadas) {
      const recompensasJSON = JSON.parse(recompensasGuardadas);
      this.recompensas = recompensasJSON.filter((recompensa: Recompensa) => recompensa.ganada === true);
    }
  }

  // Acción para "canjear" (por ahora no hace nada)
  canjearRecompensa(recompensa: Recompensa): void {
   alert(`Canjeando recompensa: ${recompensa.nombre}`);
    // Aquí se podría agregar lógica para actualizar la recompensa en el futuro.
  }

}
