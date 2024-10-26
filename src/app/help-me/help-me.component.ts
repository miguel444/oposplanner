import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-help-me',
  templateUrl: './help-me.component.html',
  styleUrl: './help-me.component.scss'
})
export class HelpMeComponent {

  lottieOptions: AnimationOptions = {
    path: 'assets/animations/corazon.json',
  };

  fotos = [
    { url: 'assets/noche.jpg', alt: 'Foto 1', descripcion: 'Un recuerdo especial' },
    { url: 'assets/picasso.jpg', alt: 'Foto 2', descripcion: 'Momentos inolvidables' },
    { url: 'assets/vinci.png', alt: 'Foto 3', descripcion: 'Aventuras juntos' },
  ];
}
