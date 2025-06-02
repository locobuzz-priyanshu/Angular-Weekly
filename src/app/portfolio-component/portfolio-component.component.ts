import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { TaskstatusComponent } from '../taskstatus/taskstatus.component';

@Component({
  selector: 'app-portfolio-component',
  imports: [AboutComponent, SkillsComponent, HomeComponent, ContactComponent, TaskstatusComponent],
  templateUrl: './portfolio-component.component.html',
  styleUrl: './portfolio-component.component.css'
})
export class PortfolioComponentComponent {

}
