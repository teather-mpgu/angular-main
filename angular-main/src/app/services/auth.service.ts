import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly SPECIAL_LOGIN = 'admin';
  readonly SPECIAL_PASSWORD = 'secret';
  private key = 'scheduleapp.logged';

  login(username: string, password: string): boolean {
    if (username === this.SPECIAL_LOGIN && password === this.SPECIAL_PASSWORD) {
      localStorage.setItem(this.key, '1');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.key);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.key) === '1';
  }
}
