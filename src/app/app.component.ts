import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const recompensas = [
      { nombre: "Cena Romántica", canjeada: false, ganada: true },
      { nombre: "Desayuno en la Cama", canjeada: false, ganada: true },
      { nombre: "Fin de Semana Romántico", canjeada: false, ganada: false },
      { nombre: "Escapada de Fin de Semana", canjeada: false, ganada: true }
    ];
    
    localStorage.setItem('recompensas', JSON.stringify(recompensas));
    
  }
}
