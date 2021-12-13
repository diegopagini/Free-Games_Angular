import { NgModule } from '@angular/core';
import { SpinnerModule } from './spinner/spinner.module';

const components = [SpinnerModule];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class SharedComponentsModule {}
