import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompoFrontComponent } from './compo-front/compo-front.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { ParolesComponent } from './paroles/paroles.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CompoFrontComponent,
    AcceuilComponent,
    SpotifyComponent,
    ParolesComponent,
    ContactComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
