import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-confirmacion',
  templateUrl: './ventana-confirmacion.component.html',
  styleUrl: './ventana-confirmacion.component.scss'
})
export class VentanaConfirmacionComponent {

  constructor(
    public dialogRef: MatDialogRef<VentanaConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mensaje: string }
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true); // Devuelve true al cerrar el diálogo
  }

  onCancel(): void {
    this.dialogRef.close(false); // Devuelve false al cerrar el diálogo
  }

}
