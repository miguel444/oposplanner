import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tema } from '../interfaces/tema';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-anadir-tema',
  templateUrl: './anadir-tema.component.html',
  styleUrl: './anadir-tema.component.scss'
})
export class AnadirTemaComponent {

  tema: Tema = { numero: 0, nombre: '', completado: false };


  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AnadirTemaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      panelClass: ['custom-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 2 * 1000,
    });
  }

  // Método para cerrar el diálogo y enviar el tema
  onSave(): void {
    if (this.tema.numero && this.tema.nombre) {
      this.dialogRef.close(this.tema);
    } else {
      this.openSnackBar('Por favor, complete todos los campos.');
    }
  }

  // Método para cerrar el diálogo sin guardar
  onCancel(): void {
    this.dialogRef.close();
  }

}
