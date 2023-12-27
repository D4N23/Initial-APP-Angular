import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { NavbarComponent } from "./navbar/navbar.component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    // RouterOutle,
    RouterModule.forRoot(routes),

  ],
  bootstrap:[
    AppComponent
  ],
  exports:[
    CommonModule
  ]
})

export class AppModule {}
