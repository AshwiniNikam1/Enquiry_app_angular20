
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isLoggedIn = false;
  username = '';

  login() {
    this.isLoggedIn = true;
    this.username = 'User';
  }

  logout() {
    this.isLoggedIn = false;
    this.username = '';
  }

  onGetStarted() {
    // Placeholder - can route to signup or open modal
    alert('Get started clicked');
  }

}
