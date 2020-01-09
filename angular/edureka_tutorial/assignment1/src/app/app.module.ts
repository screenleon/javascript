import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { YellowComponent } from './yellow/yellow.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';

@NgModule({
  declarations: [
    AppComponent,
    YellowComponent,
    RedComponent,
    GreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
