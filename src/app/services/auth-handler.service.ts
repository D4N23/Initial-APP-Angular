import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthHandlerService {



  constructor(private authService: AuthService) { }

  // login(email: string, password: string) {
  //   return this.authService.login(email, password);
  // }

  simulateLogin(email: string, password: string): Observable<any> {
    // Simular verificação de credenciais
    if (email === 'teste@email.com' && password === 'senha123') {
      const simulatedToken = 'token_simulado';
      localStorage.setItem('token', simulatedToken);
      return of({ token: simulatedToken });
    } else {
      // Credenciais inválidas
      return of({ error: 'Credenciais inválidas' });
    }
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

}
