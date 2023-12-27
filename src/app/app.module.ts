import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet
  ],
  bootstrap:[
    AppComponent
  ],
  exports:[
    CommonModule
  ]
})

export class AppModule {}
