import { CheckDrawComponent } from './check-draw/check-draw.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckGamesComponent } from './check-games/check-games.component';
import { HomeComponent } from './home/home.component';
import { NewGuessComponent } from './new-guess/new-guess.component';
import { NewDrawComponent } from './new-draw/new-draw.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'guess', pathMatch: 'full', component: NewGuessComponent},
  {path: 'check', pathMatch: 'full', component: CheckGamesComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'register', pathMatch: 'full', component: RegisterComponent},
  {path: 'draw', pathMatch: 'full', component: NewDrawComponent},
  {path: 'draw/check', pathMatch: 'full', component: CheckDrawComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
