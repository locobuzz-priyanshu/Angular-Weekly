import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = 'Priyanshu Ginkal';
  title = 'Software Engineer';
  welcomeMessage = 'Yo Team, Welcome to the coolest portfolio';
  showDetails = false;
  
  personalInfo = {
    location: 'New York, USA',
    experience: '2 years',
    education: 'Computer Science Degree'
  };

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}