import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  tasks: any[] = [];
  max: number = 5;
  progressData: any[] = [];
  colorScheme : any = {
    domain: ['#5AA454', '#A10A28']
  };

  constructor() { }

  ngOnInit(): void {
    this.loadTasksFromStorage();
    this.calculateProgress();
  }

  loadTasksFromStorage() {
    const storedTasks = localStorage.getItem('studyTasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  calculateProgress() {
    const completed = this.tasks.filter(task => task.completed).length;
    const pending = this.tasks.length - completed;
    this.progressData = [
      { name: 'Completados', value: completed },
      { name: 'Pendientes', value: pending }
    ];
  }
}
