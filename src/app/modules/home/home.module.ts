import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { HomeComponentsModule } from './components/home-components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, HomeComponentsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
