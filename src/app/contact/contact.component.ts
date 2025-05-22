import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports:[FormsModule, CommonModule],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = {
    email: 'priyanshu.ginkal@locobuzz.com',
    phone: '+91 99xxx xxx02',
    linkedin: 'linkedin.com/in/priyanshu-ginkal',
    github: 'github.com/locobuzz-priyanshu'
  };

  contactMethods = [
    { name: 'Email', value: 'priyanshu.ginkal@locobuzz.com', icon: '📧' },
    { name: 'Phone', value: '+91 99xxx xxx02', icon: '📱' },
    { name: 'LinkedIn', value: 'linkedin.com/in/priyanshu-ginkal', icon: '💼' },
    { name: 'GitHub', value: 'github.com/locobuzz-priyanshu', icon: '🐱' }
  ];

  formData = {
    name: '',
    email: '',
    message: ''
  };

  showForm = true;
  submitted = false;

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.submitted = true;
      console.log('Form submitted:', this.formData);
      // Here you would typically send the data to a server
    }
  }

  resetForm() {
    this.formData = { name: '', email: '', message: '' };
    this.submitted = false;
  }
}
