import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

//Component
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
