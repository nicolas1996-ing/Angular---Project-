import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { ContadorComponent } from './contador/contador/contador.component';
import { HttpeticionComponent } from './httpeticion/httpeticion.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    HttpeticionComponent,
    // ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeroesModule, // componete 'heroe'
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
