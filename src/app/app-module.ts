import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CoreModule } from './core/core-module';
import { ShareModule } from './share/share-module';
import { HomeModule } from './home/home-module';
import { provideHttpClient } from '@angular/common/http';
import { NoticiasModule } from './noticias/noticias-module';
import { ContactoModule } from './contacto/contacto-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ShareModule,
    HomeModule,

    NoticiasModule,
    ContactoModule,

    AppRoutingModule,

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(), 
  ],
  bootstrap: [App]
})
export class AppModule { }
