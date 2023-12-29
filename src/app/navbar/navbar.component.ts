import { Router, Routes } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { AuthHandlerService } from '../services/auth-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor( private authService:AuthService, private router: Router, private authHandler: AuthHandlerService){}

  isLoggedIn(): boolean{
    return this.authHandler.isLoggedIn();
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
