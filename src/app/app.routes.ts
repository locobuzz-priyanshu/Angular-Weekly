import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' }, // default route
  { path: 'about', component: PortfolioComponentComponent },
  { path: 'tasks', component: TasksComponent },
  { path: '**', redirectTo: 'about' } // wildcard fallback
];
