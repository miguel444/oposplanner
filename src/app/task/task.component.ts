import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: any[] = [];
  newTask: string = '';

  constructor() { }

  ngOnInit(): void {
    this.loadTasksFromStorage();
  }

  loadTasksFromStorage() {
    const storedTasks = localStorage.getItem('studyTasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  saveTasksToStorage() {
    localStorage.setItem('studyTasks', JSON.stringify(this.tasks));
  }

  addTask(): void {
    if (this.newTask) {
      this.tasks.push({ title: this.newTask, completed: false });
      this.newTask = '';
      this.saveTasksToStorage();
    }
  }

  toggleCompletion(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTasksToStorage();
  }
}
