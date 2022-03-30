import { AcceuilComponent } from './acceuil/acceuil.component';
import { MenuComponent } from './menu/menu.component';
import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  /* On récupère le composant enfant : accueil */
  @ViewChild(AcceuilComponent) accueil: AcceuilComponent;
  /* On récupère le composant menu : accueil */
  @ViewChild(MenuComponent) menu: MenuComponent;
  /*
   Le token de connexion à Spotify
  token:String;
   Indique si l'utilisateur est connecté à Spotify ou non
  isConnected:boolean;
  */
  ngOnInit(): void{
  }
  /* Liaison entre l'accueil --> menu de navigation */
  changementMenu(dir: string): void{
    this.menu.changementMenu(dir);
  }
  /* Liaison entre le menu de navigation --> accueil */
  changementAccueil(dir: string): void{
    this.accueil.changementAccueil(dir);
  }
  /* Liaison entre le A Propos en bas de l'application et la navigation du site */
  activerAPropos(): void{
    this.menu.activerAPropos();
  }
  /* Liaison entre le Contact en bas de l'application et la navigation du site */
  activerContact(): void{
    this.menu.activerContact();
  }
}
