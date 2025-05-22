import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports : [CommonModule],
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  bio = `I'm a passionate full-stack developer with a love for creating 
         beautiful and functional web applications. I enjoy solving complex 
         problems and learning new technologies.`;

  interests = ['WebAPI Application', 'Microservices', 'Frontend', 'System Designs'];
  
  achievements = [
    { year: 2024, title: 'Dotnet Angular Full Stack Intern', description: 'Worked and learned Backend Development tools' },
    { year: 2024, title: 'Software Engineer Backend', description: 'Worked on larger system, created system designs and implemented high scalable applications' },
    { year: 2025, title: 'Software Engineer - Full Stack', description: 'In a transition of developing high scalable application with frontend, webapi, services and database :)  ' }
  ];

  showBio = true;
  selectedAchievement: any = null;

  selectAchievement(achievement: any) {
    this.selectedAchievement = achievement;
  }
}