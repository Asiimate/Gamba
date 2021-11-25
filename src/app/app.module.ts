import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GambaMaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { NewGuessComponent } from './new-guess/new-guess.component';
import { CheckGamesComponent } from './check-games/check-games.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewGuessComponent,
    CheckGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GambaMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
