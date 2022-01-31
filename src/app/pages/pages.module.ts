import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

//Module
import { SharedModule } from './../shared/shared.module';

//Component
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { TopMundoComponent } from './top-mundo/top-mundo.component';
import { TopBrasilComponent } from './top-brasil/top-brasil.component';

@NgModule({
  declarations: [HomeComponent, GamesComponent, TopMundoComponent, TopBrasilComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
})
export class PagesModule {}
