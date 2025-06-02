import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-stats',
  imports: [],
  templateUrl: './task-stats.component.html',
  styleUrl: './task-stats.component.css'
})
export class TaskStatsComponent {
    @Input() tasks: any[] = [];

  getCompletedCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  getPendingCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }
}
