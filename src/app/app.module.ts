import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompoFrontComponent } from './compo-front/compo-front.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ParolesComponent } from './paroles/paroles.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AproposComponent } from './apropos/apropos.component';
import { SpotifyComponent } from './spotify/spotify.component';

@NgModule({
  declarations: [
    AppComponent,
    CompoFrontComponent,
    AccueilComponent,
    ParolesComponent,
    ContactComponent,
    MenuComponent,
    StatistiquesComponent,
    RechercheComponent,
    AproposComponent,
    SpotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
