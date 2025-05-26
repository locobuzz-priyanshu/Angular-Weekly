import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';

@Component({
  selector: 'app-root',
  imports: [ 
      RouterOutlet,
      HeaderComponent,
      RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Priyanshu Ginkal';
}
