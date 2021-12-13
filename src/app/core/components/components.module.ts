import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

const components = [HeaderModule, FooterModule];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class ComponentsModule {}
