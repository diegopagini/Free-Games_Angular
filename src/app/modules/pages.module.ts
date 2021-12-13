import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home/home-routing.module';
import { NotFoundModule } from './not-found/not-found.module';

const pages = [HomeRoutingModule, NotFoundModule];

@NgModule({
  imports: [...pages],
  exports: [...pages],
})
export class PagesModule {}
