import { Router, Routes } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  // standalone: true,
  // imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor( private authService:AuthService, private router: Router){}

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
