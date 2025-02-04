import { Component, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  /* Les variables "isVisibleNOM" permettent à l'application de connaître
    les informations à afficher à l'utilisateur */
 isVisibleAccueil: boolean;
 isVisibleSpotify: boolean;
 isVisibleLyrics: boolean ;
 isVisibleConcert: boolean ;
 isVisibleStatistiques: boolean ;
 isVisibleContact: boolean ;
 isVisibleAPropos: boolean ;
 /* Le token de connexion du client Spotify */
 token: string | undefined;
 sParam: string | undefined;
 raw_search_query: string | undefined;

 /* L'information de la connexion du client afin de savoir si la page
    traite de Spotify ou de Youtube */
 isConnected:boolean;
 /* Outil de communication entre l'Accueil et le menu de navigation (bloc gauche du site */
 @Output() changementMenu = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
   /* Au lancement de la SPA on choisi d'afficher seulement l'accueil */
   this.isVisibleAccueil = true;
   this.isVisibleSpotify = false;
   this.isVisibleLyrics = false;
   this.isConnected = false;
   this.isVisibleStatistiques = false;
   this.isVisibleConcert = false;
   this.isVisibleContact = false;
   this.isVisibleAPropos = false;
  console.log("ACCUEIL-COMPONENT Token = " + this.token);
 }

 /**
  * Permet de communiquer au menu à quelle partie du site on souhaite accéder
  * (pour changer l'affichage du menu)
  * @param dir La partie du site auquel on veut accéder
  */
 changementAccueil(dir: string): void {
   this.hide();
   this.hide_all();
   switch (dir) {
     case "accueil":
       this.accederAccueil_Event();
       break;
     case "infos":
       this.accederStatistiques_Event();
       break;
     case "spotify":
       this.accederSpotify_Event();
       break;
     case "lyrics":
       this.accederLyrics_Event();
       break;
     case "concert":
       this.accederConcert_Event();
       break;
     case "contact":
       this.accederContact_Event();
       break;
     case "apropos":
       this.accederApropos_Event();
       break;
     default:
       break;
   }
 }
 /**
  * Masque le menu
  */
 hide(): void{
   this.isVisibleAccueil = false;
 }
 /**
  * Masque TOUT sauf le menu
  */
 hide_all(): void{
   this.isVisibleSpotify = false;
   this.isVisibleLyrics = false;
   this.isVisibleStatistiques = false;
   this.isVisibleConcert = false;
   this.isVisibleContact = false;
   this.isVisibleAPropos = false;
 }

 /**
  * Permet d'accéder à l'accueil et de transmettre l'information au menu de navigation
  */
 accederAccueil(): void{
   this.isVisibleAccueil = true;
   this.hide_all();
   this.changementMenu.emit("accueil");
 }
 /**
  * Permet d'accéder à Spotify et de transmettre l'information au menu de navigation
  */
 accederSpotify(): void{
   this.hide()
   this.isVisibleSpotify = true;
   this.changementMenu.emit("spotify");
 }
 /**
  * Permet d'accéder aux infos et de transmettre l'information au menu de navigation
  */
 accederInfos(): void{
   this.hide()
   this.isVisibleStatistiques = true;
   this.changementMenu.emit("infos");
 }
 /**
  * Permet d'accéder aux concerts et de transmettre l'information au menu de navigation
  */
 accederConcert(): void{
   this.hide()
   this.isVisibleConcert = true;
   this.changementMenu.emit("concert");
 }
 /**
  * Permet d'accéder aux lyrics et de transmettre l'information au menu de navigation
  */
 accederLyrics(): void{
   this.hide()
   this.isVisibleLyrics = true;
   this.changementMenu.emit("lyrics");
 }
 /**
  * Permet d'accéder au formulaire de contact et de transmettre l'information au menu de navigation
  */
 accederContact(): void {
   this.hide()
   this.isVisibleContact = true;
   this.changementMenu.emit("contact");
 }
 /**
  * Action quand réception d'un message du menu de navigation : accès à l'accueil
  */
 accederAccueil_Event(): void{
   this.isVisibleAccueil = true;
   this.hide_all();
 }
 /**
  * Action quand réception d'un message du menu de navigation : accès à Spotify
  */
 accederSpotify_Event(): void{
   this.hide()
   this.isVisibleSpotify = true;
 }
 /**
  * Action quand réception d'un message du menu de navigation : accès aux infos
  */
 accederStatistiques_Event(): void{
   this.hide()
   this.isVisibleStatistiques = true;
 }
 /**
  * Action quand réception d'un message du menu de navigation : accès aux concerts
  */
 accederConcert_Event(): void{
   this.hide()
   this.isVisibleConcert = true;
 }
 /**
  * Action quand réception d'un message du menu de navigation : accès aux lyrics
  */
 accederLyrics_Event(): void{
   this.hide()
   this.isVisibleLyrics = true;
 }
 /**
  * Action quand réception d'un message du menu de navigation : accès au formulaire de contact
  */
 accederContact_Event(): void{
   this.hide()
   this.isVisibleContact = true;
 }
 /**
  * Permet d'accéder à l'à propos et de transmettre l'information au menu de navigation
  */
 accederApropos(): void{
   this.hide()
   this.isVisibleAPropos = true;
   this.changementMenu.emit("apropos");
 }
 /**
  * Action quand réception d'un message du menu de navigation : accès à l'à propos
  */
 accederApropos_Event(): void{
   this.hide()
   this.isVisibleAPropos = true;
 }
 /**
  * Permet de se connecter à l'API Spotify
  */
  loginSpotify (): void{
     // Fonction qui permet d' extraite le token client de l 'URL du Site
     const getUrlParameter = (sParam: string) => {
       let sPageURL = window.location.search.substring (1), sURLVariables = sPageURL != undefined && sPageURL.length > 0 ? sPageURL.split('#'):[], sParameterName, i;
       let split_str = window.location.href.length > 0 ? window.location.href.split('#') : [];

       sURLVariables = split_str != undefined && split_str.length > 1 && split_str[1].length > 0 ? split_str[1].split('&') : [];
       for ( i = 0; i < sURLVariables.length ; i++) {
           sParameterName = sURLVariables[i].split('=');
           if ( sParameterName [ 0 ] === sParam ) {
             return sParameterName[1] === undefined ? true : decodeURIComponent ( sParameterName [ 1 ] ) ;
           }
         }
         return;
     };

     // Le token d'acces est stocke dans cette variable

     const accessToken = getUrlParameter('access_token');

     /* BLOC CONNEXION */
     let client_id = '26497d6a4fa64c8e94d149daa47ca735';

     /* URL du site pour la redirection apres connexion ( lien encoder via le site ci-dessous) : https://www.url-encode-decode.com/ */

     var redirect_uri = 'http%3A%2F%2Flocalhost%3A4200%2F';
     const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`;
     if(accessToken == null || accessToken == "" || accessToken == undefined){
        window.location.replace(redirect);
      }
     window.location.replace(redirect);
     this.token = (accessToken || '').toString();

     /* On est maintenant connecte a Spotify (on peut donc afficher la page Spotify au lieu de Youtube */
     this.isConnected = true ;
     this.changementMenu.emit("connected")

     console.log("Le token d'acces est : " + this.token);

   }


}
