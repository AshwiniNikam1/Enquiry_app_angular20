import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Enquiry_app_angular20');
   isLoggedIn = false;
  username = '';

  login() {
    this.isLoggedIn = true;
    this.username = 'User'; // Replace with actual username logic
  }

  logout() {
    this.isLoggedIn = false;
    this.username = '';
  }
}
