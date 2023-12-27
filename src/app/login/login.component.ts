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

  constructor(private authHandler: AuthHandlerService){}

  onSubmit(): void{
      this.authHandler.login(this.email, this.password).subscribe( response =>{
        // armazenar o token JWT localmente
        localStorage.setItem('token', response.token);
      })
    }
  }

