import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginModule } from "./login/login.module";
import { HttpClientModule } from "@angular/common/http";
import { ChartModule } from "angular2-chartjs";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from "@angular/forms";
import { IonicModule } from '@ionic/angular';
import { provideIonicAngular } from '@ionic/angular/standalone';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    LoginModule,
    FormsModule,
    RouterModule.forRoot(routes),
    IonicModule.forRoot({}),


  ],
  bootstrap:[
    AppComponent
  ],
  exports:[

  ],
  providers: [
    provideIonicAngular({})
  ]
})

export class AppModule {}
