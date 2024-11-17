import { Faculte } from "./faculte.model";
import { Image } from "./image.model";

export class Medecin {
    idmedecin! : number;
    nommedecin! : string;
    specialite! : string;
    datenaissance! : Date ;
    faculte! : Faculte;
    image! : Image
    

    imageStr!:string
    images!: Image[];

    }
    