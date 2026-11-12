import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AnimationOptions } from 'ngx-lottie';
import 'zone.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('mensajeBienvenida', { static: true })
  mensajeBienvenida!: TemplateRef<unknown>;

  private mensajeDialog?: MatDialogRef<unknown>;

  ngOnInit(): void {
    this.mensajeDialog = this.dialog.open(this.mensajeBienvenida, {
      width: '680px',
      maxWidth: 'calc(100vw - 32px)',
      maxHeight: 'calc(100dvh - 32px)',
      disableClose: true,
      ariaLabel: 'Mensaje para Lucia Maria',
      ariaDescribedBy: 'mensaje-bienvenida-texto',
      autoFocus: '.mensaje-cerrar',
    });
  }

  ngOnDestroy(): void {
    this.mensajeDialog?.close();
  }

  lottieOptions: AnimationOptions = {
    path: 'assets/animations/cat.json',
  };

  totalDias: number;
  diaActual: number;
  porcentajeProgreso: number;
  finalizado: boolean = false;


  constructor(private dialog: MatDialog) {
    const inicio = new Date(2024, 9, 30); // 30 de octubre de 2024
    const fin = new Date(2025, 5, 30);    // 30 de junio de 2025

    const tiempoTotal = fin.getTime() - inicio.getTime();
    this.totalDias = Math.floor(tiempoTotal / (1000 * 3600 * 24));

    const hoy = new Date();
    const tiempoTranscurrido = hoy.getTime() - inicio.getTime();
    this.diaActual = Math.floor(tiempoTranscurrido / (1000 * 3600 * 24)) + 1;

    if(this.diaActual < 0){
      this.diaActual = 0;
    }

    // Verificar si hemos alcanzado el último día
    if (this.diaActual >= this.totalDias) {
      this.diaActual = this.totalDias;
      this.porcentajeProgreso = 100;
      this.finalizado = true; // Indica que se ha alcanzado el día final
    } else {
      // Calcula el porcentaje normal en caso de no haber llegado aún al final
      this.porcentajeProgreso = (this.diaActual / this.totalDias) * 100;
    }
  }



  isLoading = true;


}


