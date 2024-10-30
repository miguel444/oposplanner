import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-felicitacion',
  templateUrl: './felicitacion.component.html',
  styleUrl: './felicitacion.component.scss'
})
export class FelicitacionComponent {

  lottieOptions: AnimationOptions = {
    path: 'assets/animations/felicitacion.json',
  };

  constructor(private dialogRef: MatDialogRef<FelicitacionComponent>) {}

  
  closeDialog() {
    this.dialogRef.close();
  }
}
