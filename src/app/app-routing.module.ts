import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckGamesComponent } from './check-games/check-games.component';
import { HomeComponent } from './home/home.component';
import { NewGuessComponent } from './new-guess/new-guess.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'guess', pathMatch: 'full', component: NewGuessComponent},
  {path: 'check', pathMatch: 'full', component: CheckGamesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
