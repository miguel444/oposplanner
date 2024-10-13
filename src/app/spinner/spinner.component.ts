import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  @Input() isLoading: boolean = false; // Recibimos el estado desde el componente padre
  @Input() progressValue = 0; // Recibimos el estado desde el componente padre


  ngOnInit() {
    // Simulamos el tiempo de carga de 5 segundos
    const duration = 6000; // 5 segundos en milisegundos
    const interval = 100; // Intervalo de actualización (cada 100ms)
    const step = 100 / (duration / interval); // El progreso que avanzará en cada intervalo

    const intervalId = setInterval(() => {
      this.progressValue += step;
      
      // Cuando la barra de progreso llega al 100%, ocultamos el spinner
      if (this.progressValue >= 100) {
        clearInterval(intervalId); // Detenemos la actualización
        this.isLoading = true; // Oculta el spinner
      }
    }, interval);
  }
}
