import { Commentaire } from "./commentaire";
export class bateau {
    constructor(public id :number,public libelle:string,public marque:string,public categorie:string,
        public prix:number,public etat:boolean,public image :any,public comments:Commentaire[]){}
}

