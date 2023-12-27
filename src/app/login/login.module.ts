import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,

  ]
})
export class LoginModule { }
