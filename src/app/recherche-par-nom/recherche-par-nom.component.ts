import { Component } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {
  medecins:Medecin[]=[];
  allmedecin:Medecin[]=[];
  nommedecin!:string;
  searchTerm!:String;
  ngOnInit(): void {
    this.MedecinService.listemedecin().subscribe(meds => {
      console.log(meds);
      this.allmedecin = meds;
      });
    }
  constructor(private MedecinService:MedecinService){}
 /*  onKeyUp(filterText : string){
    this.medecins = this.allmedecin.filter(item =>
    item.nommedecin.toLowerCase().includes(filterText));
    } */
    


  recherchermeds(){
    this.MedecinService.rechercherParNom(this.nommedecin).
      subscribe(meds => {
      this.medecins = meds;
      console.log(meds)});
  }
  
}