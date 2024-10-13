import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  @Input() isLoading: boolean = true;
  @Input() progressValue = 0;


  ngOnInit() {
    const duration = 6000;
    const interval = 100;
    const step = 100 / (duration / interval);

    const intervalId = setInterval(() => {
      this.progressValue += step;

      if (this.progressValue >= 100) {
        clearInterval(intervalId);
        this.isLoading = true;
      }
    }, interval);
  }

  enter() {
    this.isLoading = false;
  }
}
