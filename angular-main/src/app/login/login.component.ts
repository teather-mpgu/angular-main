import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    console.log('submit pressed', this.username, this.password);
    this.error = '';

    const ok = this.auth.login(this.username, this.password);

    if (ok) {
      this.router.navigate(['/schedule']);
    } else {
      this.error = 'Неверный логин или пароль';
    }
  }
}
