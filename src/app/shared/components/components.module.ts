import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { SpinnerModule } from './spinner/spinner.module';

const components = [HeaderModule, FooterModule, SpinnerModule];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class ComponentsModule {}
