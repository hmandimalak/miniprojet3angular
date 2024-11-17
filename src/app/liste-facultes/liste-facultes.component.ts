import { Component } from '@angular/core';
import { MedecinService } from '../services/medecin.service';
import { Faculte } from '../model/faculte.model';

@Component({
  selector: 'app-liste-facultes',
  templateUrl: './liste-facultes.component.html',
  styles: [
  ]
})
export class ListeFacultesComponent {

  facultes! : Faculte[];
  ajout:boolean=true;
  updatedFac:Faculte = {"idfac":0,"nomfac":""};
  constructor(private medecinService : MedecinService) { }

  ngOnInit(): void {
    this.medecinService.listeFacultes().
    subscribe(facs => {this.facultes= facs._embedded.facultes;;
    console.log(facs);
    });
    }
    chargerFacultes(){
      this.medecinService.listeFacultes().
      subscribe(facs => {this.facultes = facs._embedded.facultes;;
      console.log(facs);
      });
      }
  faculteUpdated(fac:Faculte){
    console.log("fac updated event",fac);
    this.medecinService.ajouterFaculte(fac).
    subscribe( ()=> this.chargerFacultes());
  }
  updateFac(fac:Faculte) {
    this.updatedFac=fac
    this.ajout=false;
    }
    

}
