import { Injectable } from '@angular/core';
import { bateau } from '../classeBateau/bateau';
import { Commentaire } from '../classeBateau/commentaire';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private bateaux: bateau[]=[
    new bateau (100,"HAWAII","Lagoon","yacht a moteur", 800000 ,true,"../assets/bateau1",[new Commentaire("HAWAII",new Date(12/13/2015),)]),
    new bateau (101,"SIRIUS","carolina","yacht a moteur",200000 , true,"../assets/bateau2",[new Commentaire("SIRIUS",new Date(12/13/2015))]),
    new bateau (102,"Blue Marlin","carolina","zodiac",60000 ,true,"../assets/bateau3",[new Commentaire("Blue Marlin",new Date(1/1/2014))]),
    new bateau (103,"Didon","Lagoon","zodiac",500000 ,true,"../assets/bateau4",[new Commentaire("Didon",new Date(12/13/2015))]),
    new bateau (104,"Ferrando","yamaha","yacht a moteur",500000 ,true,"../assets/bateau5",[new Commentaire("Ferrando",new Date(2/3/2018))]),
    new bateau (105,"Queen Elizabeth","yamaha","yacht a voile",630000 ,true,"../assets/bateau6",[new Commentaire("Queen Elizabeth",new Date(12/13/2015))])
    ];
    getLivres(){return this.bateaux;}
    getLivreById(id :number){return this.bateaux.find(l=>l.id ==id);}
    getLivresByCategorie (categ : string){return this.bateaux.filter(l=>l.categorie==categ);}
  constructor() { }
}
