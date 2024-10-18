import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mostrar-recompensa',
  templateUrl: './mostrar-recompensa.component.html',
  styleUrl: './mostrar-recompensa.component.scss'
})
export class MostrarRecompensaComponent {
  isFlipped: boolean = false;


  constructor(
    public dialogRef: MatDialogRef<MostrarRecompensaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { imagen: string, descripcion: string }
  ) { }

  toggleFlip() {
    this.isFlipped = !this.isFlipped; // Cambia el estado al hacer clic
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
