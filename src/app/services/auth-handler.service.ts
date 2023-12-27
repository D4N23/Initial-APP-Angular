import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthHandlerService {

  constructor(private authService: AuthService) { }

  login(email: string, password: string) {
    return this.authService.login(email, password);
  }
}
