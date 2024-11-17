import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { MedecinService } from '../services/medecin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Faculte } from '../model/faculte.model';
import { Medecin } from '../model/medecin.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html'
})
export class AddMedecinComponent {
  newMedecin = new Medecin();
  facultes! : Faculte[];
  newIdfac! : number;
  newfaculte! :Faculte;
  uploadedImage!: File;
  imagePath: any;


  constructor(private activatedRoute: ActivatedRoute,
              private medecinService : MedecinService,
              private router :Router){}
  ngOnInit(): void {
    this.medecinService.listeFacultes().
    subscribe(facs => {this.facultes = facs._embedded.facultes;
    console.log(facs);
    });
}
              
  
  /* addMedecin(){
    console.log(this.newIdfac);
    //this.newfaculte=this.medecinService.consulterfacultes(this.newIdfac);
    this.newMedecin.faculte =this.newfaculte;
    this.medecinService.ajoutermedecin(this.newMedecin);
    this.router.navigate(['medecins']);
} */

    /*addMedecin() {
      this.newMedecin.faculte = this.facultes.find(fac => fac.idfac == this.newIdfac)!;
      this.medecinService.ajoutermedecin(this.newMedecin)
        .subscribe(
          (meds) => {
            console.log(meds);
            this.router.navigate(['medecins']);
          },
          (error) => {
            console.error('Erreur lors de l\'ajout du médecin', error);
          }
        );
    }*/
    addMedecin(){
          this.medecinService
          .uploadImage(this.uploadedImage, this.uploadedImage.name)
          .subscribe((img: Image) => {
          this.newMedecin.image=img;
          this.newMedecin.faculte = this.facultes.find(cat => cat.idfac
          == this.newIdfac)!;
          this.medecinService
          .ajoutermedecin(this.newMedecin)
          .subscribe(() => {
          this.router.navigate(['medecins']);
          });
          });
    }
    onImageUpload(event: any) {
      this.uploadedImage = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = (_event) => { this.imagePath = reader.result; }
      }
    
}
