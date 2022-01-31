import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TopBrasilComponent } from './pages/top-brasil/top-brasil.component';
import { TopMundoComponent } from './pages/top-mundo/top-mundo.component';
import { GamesComponent } from './pages/games/games.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'topBrasil', component: TopBrasilComponent },
  { path: 'topMundo', component: TopMundoComponent },
  { path: 'games', component: GamesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
