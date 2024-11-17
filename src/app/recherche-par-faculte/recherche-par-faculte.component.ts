import { Faculte } from '../model/faculte.model';
import { Component } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-recherche-par-medecin',
  templateUrl: './recherche-par-Faculte.component.html',
  styleUrls: ['./recherche-par-Faculte.component.css']
})
export class RechercheParFaculteComponent {
medecins:Medecin[]=[];
idfac!:number;
facultes:Faculte[]=[];
ngOnInit(): void {
  this.medecinService.listeFacultes().
  subscribe(facs => {this.facultes = facs._embedded.facultes;
  console.log(facs);
  });
  }
  
constructor(private medecinService:MedecinService){}
onChange() {
  this.medecinService.rechercherParFaculte(this.idfac).
  subscribe(meds =>{this.medecins=meds});
  }
}