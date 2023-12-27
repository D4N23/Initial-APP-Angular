import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthHandlerService } from '../services/auth-handler.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [FormBuilder],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email: string = '';
password: string = '';
loginError: string = '';
loginSuccess: string = '';

  constructor(private authHandler: AuthHandlerService){}

  onSubmit(): void{
      this.authHandler.simulateLogin(this.email, this.password).subscribe( (response) =>{
        if(response.token){
           // armazenar o token JWT localmente
        localStorage.setItem('token', response.token);
        this.loginSuccess = 'Login Bem Sucedido';
        this.loginError = ''
        } else {
        // Exibir mensagem de erro para o usuário
        this.loginError = response.error || 'Erro durante o login';
        this.loginSuccess = '';
      }

      })

    }
  }

