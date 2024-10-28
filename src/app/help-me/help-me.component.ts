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
    { url: 'assets/images/foto.webp'},
    { url: 'assets/images/foto-1.webp'},
    { url: 'assets/images/foto-2.webp' },
    { url: 'assets/images/foto-3.webp' },
    { url: 'assets/images/foto-4.webp' },
    { url: 'assets/images/foto-5.webp' },
    { url: 'assets/images/foto-6.webp' },
    { url: 'assets/images/foto-8.webp' },
  ];
}
