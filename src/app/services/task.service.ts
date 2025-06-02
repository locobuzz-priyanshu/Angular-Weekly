// services/task.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdDate: Date;
}

export interface TaskStats {
  total: number;
  completed: number;
  pending: number;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  private statsSubject = new BehaviorSubject<TaskStats>({ total: 0, completed: 0, pending: 0 });

  // Observable streams for components to subscribe to
  tasks$ = this.tasksSubject.asObservable();
  stats$ = this.statsSubject.asObservable();

  constructor() {
    // Initialize with some sample data (you can remove this in production)
    this.initializeSampleData();
  }

  // Get current tasks value
  getTasks(): Task[] {
    return this.tasksSubject.value;
  }

  // Get current stats value
  getStats(): TaskStats {
    return this.statsSubject.value;
  }

  // Add a new task
  addTask(task: Omit<Task, 'id'>): void {
    const currentTasks = this.getTasks();
    const newTask: Task = {
      ...task,
      id: this.generateId()
    };
    const updatedTasks = [...currentTasks, newTask];
    this.updateTasks(updatedTasks);
  }

  // Update an existing task
  updateTask(updatedTask: Task): void {
    const currentTasks = this.getTasks();
    const updatedTasks = currentTasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
    this.updateTasks(updatedTasks);
  }

  // Delete a task
  deleteTask(taskId: number): void {
    const currentTasks = this.getTasks();
    const updatedTasks = currentTasks.filter(task => task.id !== taskId);
    this.updateTasks(updatedTasks);
  }

  // Toggle task completion status
  toggleTaskCompletion(taskId: number): void {
    const currentTasks = this.getTasks();
    const updatedTasks = currentTasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    this.updateTasks(updatedTasks);
  }

  // Mark all tasks as completed
  markAllCompleted(): void {
    const currentTasks = this.getTasks();
    const updatedTasks = currentTasks.map(task => ({ ...task, completed: true }));
    this.updateTasks(updatedTasks);
  }

  // Clear all completed tasks
  clearCompleted(): void {
    const currentTasks = this.getTasks();
    const updatedTasks = currentTasks.filter(task => !task.completed);
    this.updateTasks(updatedTasks);
  }

  // Private method to update tasks and recalculate stats
  private updateTasks(tasks: Task[]): void {
    this.tasksSubject.next(tasks);
    this.calculateAndUpdateStats(tasks);
  }

  // Calculate and update statistics
  private calculateAndUpdateStats(tasks: Task[]): void {
    const stats: TaskStats = {
      total: tasks.length,
      completed: tasks.filter(task => task.completed).length,
      pending: tasks.filter(task => !task.completed).length
    };
    this.statsSubject.next(stats);
  }

  // Generate unique ID for new tasks
  private generateId(): number {
    const currentTasks = this.getTasks();
    return currentTasks.length > 0 ? Math.max(...currentTasks.map(t => t.id)) + 1 : 1;
  }

  // Initialize with sample data (remove in production)
  private initializeSampleData(): void {
    const sampleTasks: Task[] = [
      {
        id: 1,
        title: 'Complete Angular portfolio',
        description: 'Finish the portfolio website with task management',
        completed: false,
        createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      },
      {
        id: 2,
        title: 'Implement task service',
        description: 'Create service for component communication',
        completed: true,
        createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
      },
      {
        id: 3,
        title: 'Add routing functionality',
        description: 'Set up Angular routing between components',
        completed: true,
        createdDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
      },
      {
        id: 4,
        title: 'Write unit tests',
        description: 'Add comprehensive testing for all components',
        completed: false,
        createdDate: new Date() // Today
      }
    ];
    this.updateTasks(sampleTasks);
  }
}