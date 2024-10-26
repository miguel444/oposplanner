import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import 'zone.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  lottieOptions: AnimationOptions = {
    path: 'assets/animations/cat.json', // Ruta de la animación Lottie JSON
  };

  currentDay = 150;  // Día actual
  totalDays = 450;  // Día final (por ejemplo, el día del examen)

  get progressPercentage(): number {
    return (this.currentDay / this.totalDays) * 100;
  }

  isLoading = true;

  constructor() {}
  
}


