import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  technicalSkills = [
    { name: 'HTML/CSS', level: 40, category: 'Frontend' },
    { name: 'JavaScript', level: 75, category: 'Frontend' },
    { name: 'TypeScript', level: 75, category: 'Frontend' },
    { name: 'Angular', level: 60, category: 'Frontend' },
    { name: 'Node.js', level: 20, category: 'Backend' },
    { name: 'Dotnet', level: 90, category: 'Backend' },
    { name: 'MSSQL', level: 80, category: 'Database' },
    { name: 'Clickhouse', level: 75, category: 'DataLake' }
  ];

  softSkills = ['Problem Solving', 'Attention to details','Communication', 'Team Work', 'Time Management'];
  
  selectedCategory = 'All';
  categories = ['All', 'Frontend', 'Backend', 'Database', 'Dataware house','DataLakes'];

  get filteredSkills() {
    if (this.selectedCategory === 'All') {
      return this.technicalSkills;
    }
    return this.technicalSkills.filter(skill => skill.category === this.selectedCategory);
  }

  getSkillColor(level: number): string {
    if (level >= 80) return '#28a745';
    if (level >= 60) return '#ffc107';
    return '#dc3545';
  }
}
