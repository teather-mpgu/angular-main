import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username = '';
  password = '';
  confirm = '';
  message = '';

  submit() {
    this.message = 'Регистрация отображается, но реальной регистрации не происходит (нет БД).';
  }
}
