import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { apiReducer } from './core/store/reducers/api.reducer';
import { GamesEffect } from './core/store/effects/api.effect';
import { ComponentsModule } from './core/components/components.module';
import { SharedComponentsModule } from './shared/components/components.module';

const modules = [ComponentsModule, SharedComponentsModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // Components
    ...modules,
    // Root Reducer
    StoreModule.forRoot({ app: apiReducer }),
    // Store DevTools
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    // Root Effect
    EffectsModule.forRoot([GamesEffect]),
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
