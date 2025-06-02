import { Component } from '@angular/core';
import { TaskStatsComponent } from '../shared/task-stats/task-stats.component';
import { TaskService, Task, TaskStats } from '../services/task.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-taskstatus',
  imports: [TaskStatsComponent],
  templateUrl: './taskstatus.component.html',
  styleUrl: './taskstatus.component.css'
})
export class TaskstatusComponent {
  private tasksSubscription: Subscription = new Subscription();
  private statsSubscription: Subscription = new Subscription();

  constructor(private taskService: TaskService) { }

  tasks: Task[] = [];
  stats: TaskStats = { total: 0, completed: 0, pending: 0 };

  ngOnInit(): void {
    // Subscribe to tasks observable
    this.tasksSubscription = this.taskService.tasks$.subscribe(
      tasks => {
        this.tasks = tasks;
      }
    );

    // Subscribe to stats observable
    this.statsSubscription = this.taskService.stats$.subscribe(
      stats => {
        this.stats = stats;
      }
    );
  }

  ngOnDestroy(): void {
    // Clean up subscriptions to prevent memory leaks
    this.tasksSubscription.unsubscribe();
    this.statsSubscription.unsubscribe();
  }

  // Methods to get counts (same as in TasksComponent)
  getCompletedCount(): number {
    return this.stats.completed;
  }

  getPendingCount(): number {
    return this.stats.pending;
  }

  getTotalCount(): number {
    return this.stats.total;
  }
}
