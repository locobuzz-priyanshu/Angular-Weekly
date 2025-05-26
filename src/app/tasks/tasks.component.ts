import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HeaderComponent } from '../header/header.component';

// Define what a task looks like
interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdDate: Date;
}

@Component({
  standalone: true, 
  imports: [CommonModule, FormsModule],
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {
  today = new Date();
  // Some sample tasks to start with
  tasks: Task[] = [
    {
      id: 1,
      title: 'Learn Angular Services',
      completed: false,
      createdDate: new Date('2024-01-15')
    },
    {
      id: 2,
      title: 'Build Task App',
      completed: true,
      createdDate: new Date('2024-01-10')
    },
    {
      id: 3,
      title: 'Practice TypeScript',
      completed: false,
      createdDate: new Date('2024-01-12')
    }
  ];

  getCompletedCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  getPendingCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }


  // Method to toggle task completion
  toggleTask(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }

  // Method to delete task
  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }
    newTaskTitle: string = ''; // For the form input

  addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: this.getNextId(),
        title: this.newTaskTitle.trim(),
        completed: false,
        createdDate: new Date()
      };
      
      this.tasks.push(newTask);
      this.newTaskTitle = ''; // Clear the form
    }
  }

  private getNextId(): number {
    const maxId = Math.max(...this.tasks.map(t => t.id), 0);
    return maxId + 1;
  }

}
