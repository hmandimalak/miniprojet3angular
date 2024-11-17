import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../model/medecin.model';
import { Faculte } from '../model/faculte.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html'
})
export class UpdateMedecinComponent implements OnInit{
  currentMedecin = new Medecin();
  facultes! :Faculte[];
  updateFacId! :number;
  myImage! : string;
  uploadedImage!: File;
  isImageUpdated: Boolean=false;


  constructor(private activatedRoute: ActivatedRoute,
                private router :Router,
                private medecinService: MedecinService){}

  
  ngOnInit(): void {
      this.medecinService.listeFacultes().
      subscribe(facs => {this.facultes = facs._embedded.facultes;
      });
      this.medecinService.consulterMedecin(this.activatedRoute.snapshot.params['id'])
      .subscribe( med =>{ this.currentMedecin = med;
     this.updateFacId = med.faculte.idfac;
     } )  }    
   /* ngOnInit():void {
      this.medecinService.listeFacultes().
      subscribe(facs => {this.facultes = facs._embedded.facultes;
      console.log(facs);
      });

      this.medecinService.consulterMedecin(this.activatedRoute.snapshot.params['id']).
       subscribe( med =>{ this.currentMedecin = med; 
      this.updateFacId =
      this.currentMedecin.faculte.idfac;

      this.medecinService
      .loadImage(this.currentMedecin.image.idImage)
      .subscribe((img: Image) => {
      this.myImage = 'data:' + img.type + ';base64,' + img.image;
      }); 




       } ) ;
      }
      */
      updateMedecin() {
        this.currentMedecin.faculte = this.facultes.find(fac => fac.idfac ==
        this.updateFacId)!;
        this.medecinService
        .updateMedecin(this.currentMedecin)
        .subscribe((med) => {
        this.router.navigate(['medecins']);
        });
        }

      /*updateMedecin() {
        this.currentMedecin.faculte = this.facultes.find(fac => fac.idfac ==
        this.updateFacId)!;
        //tester si l'image du produit a été modifiée
        if (this.isImageUpdated)
        {
        this.medecinService
        .uploadImage(this.uploadedImage, this.uploadedImage.name)
        .subscribe((img: Image) => {
        this.currentMedecin.image = img;
        this.medecinService
        .updateMedecin(this.currentMedecin)
        .subscribe((med) => {
        this.router.navigate(['medecins']);
        });
        });
        }
        else{
        this.medecinService
        .updateMedecin(this.currentMedecin)
        .subscribe((prod) => {
        this.router.navigate(['medecins']);
        });
        }
        }*/
  
  /*updateMedecin(){
    this.currentMedecin.faculte = this.facultes.
    find(fac => fac.idfac == this.updateFacId)!;
  this.medecinService.updateMedecin(this.currentMedecin).subscribe(med => {
  this.router.navigate(['medecins']); }
    );
    }*/
    onImageUpload(event: any) {
      if(event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated =true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => { this.myImage = reader.result as string; };
      }
      }
      onAddImageMedecin() {
        this.medecinService
        .uploadImageMed(this.uploadedImage,
        this.uploadedImage.name,this.currentMedecin.idmedecin)
        .subscribe( (img : Image) => {
        this.currentMedecin.images.push(img);
        });
        }
        supprimerImage(img: Image){
          let conf = confirm("Etes-vous sûr ?");
          if (conf)
          this.medecinService.supprimerImage(img.idImage).subscribe(() => {
          //supprimer image du tableau currentProduit.images
          const index = this.currentMedecin.images.indexOf(img, 0);
          if (index > -1) {
          this.currentMedecin.images.splice(index, 1);
          }
          });
          }
      
    

}
