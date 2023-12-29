import { FormsModule } from '@angular/forms';
import { RegisterService } from './../services/register/register.service';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    formData : any = {
      firstname: '',
      lastname: '',
      partnertype: '1',
      cpf: ''
    }

    registerError: string = '';
    registerSuccess: string = '';

    constructor(private registerService: RegisterService) {}

    register(): void{
      this.registerService.registerPartner(this.formData).subscribe(
        (response) =>{
          console.log('Registro bem sucedido:', response);
          this.registerSuccess = 'Registro Bem Sucedido';
          this.registerError = '';
          },
        (error) => {
          this.registerError = 'Erro durante o Registro';
          console.log('Erro ao tentar cadastrar:', error);
          this.registerSuccess = ''
        }
      );
    }
}
