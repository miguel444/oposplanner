import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Recompensa } from '../interfaces/recompensa';

@Component({
  selector: 'app-mostrar-recompensa',
  templateUrl: './mostrar-recompensa.component.html',
  styleUrl: './mostrar-recompensa.component.scss'
})
export class MostrarRecompensaComponent {
  isFlipped: boolean = false;

  @Output() canjearPremioEvento = new EventEmitter<Recompensa>(); // Crear un EventEmitter

  constructor(
    public dialogRef: MatDialogRef<MostrarRecompensaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { recompensa: Recompensa }
  ) { }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
    if(this.isFlipped && !this.data.recompensa.canjeado) {
      this.canjearPremioEvento.emit(this.data.recompensa);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
