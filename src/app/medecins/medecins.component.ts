import { Component } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecins.component.html'
})
export class MedecinComponent {
  medecins?: Medecin[] ; 
 


  apiURL: string = 'http://localhost:8100/medecins/api';
  constructor(private medecinService : MedecinService,
              public authService: AuthService){
    //this.medecins = medecinService.listemedecin();
    
    
  }
  ngOnInit(): void {
   this.chargerMedecins();
  
  }
  chargerMedecins(){
    this.medecinService.listemedecin().subscribe(meds=> {
    this.medecins=  meds  ;
    this.medecins.forEach(( med ) => {
       med.imageStr = 'data:' +  med.images[0].type + ';base64,' +  med.images[0].image;
      });
    });      }
  /*chargerMedecins() {
    this.medecinService.listemedecin().subscribe(meds => {
      this.medecins = meds;
      this.medecins.forEach((med) => {
        console.log(med); // Log each individual vet object

        // Check if a single image exists (not an array)
        if (med.image && med.image.type && med.image.image) {
          med.imageStr = 'data:' + med.image.type + ';base64,' + med.image.image;
        } else {
          console.warn('Image type or image data is missing for Vetement ID:', med.idmedecin);
        }
      });
    });
  }*/

  /*chargerMedecins(){
    this.medecinService.listemedecin().subscribe(meds=> {
    this.medecins=  meds  ;
    this.medecins.forEach(( med ) => {
       med.imageStr = 'data:' +  med.image.type + ';base64,' +  med.image.image;
      });
    });      }*/
  /*chargerMedecins(){
    this.medecinService.listemedecin().subscribe(meds => {
      console.log(meds);
      this.medecins = meds;
      });
      }*/
  
  supprimerMedecin(med: Medecin)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.medecinService.supprimerMedecin(med.idmedecin).subscribe(() => {
console.log("medecin supprimé");
this.chargerMedecins();
});
}
}
