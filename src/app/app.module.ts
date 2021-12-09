
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GambaMaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { NewGuessComponent } from './new-guess/new-guess.component';
import { CheckGamesComponent } from './check-games/check-games.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { NewDrawComponent } from './new-draw/new-draw.component';
import { CheckDrawComponent } from './check-draw/check-draw.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewGuessComponent,
    CheckGamesComponent,
    LoginComponent,
    RegisterComponent,
    NewDrawComponent,
    CheckDrawComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GambaMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
