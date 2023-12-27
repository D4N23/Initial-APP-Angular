import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginModule } from "./login/login.module";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    LoginModule,
    RouterModule.forRoot(routes),

  ],
  bootstrap:[
    AppComponent
  ],
  exports:[

  ]
})

export class AppModule {}
