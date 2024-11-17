import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinComponent } from './medecins/medecins.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { medecinGuard } from './medecin.guard';
import { RechercheParFaculteComponent } from './recherche-par-faculte/recherche-par-faculte.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeFacultesComponent } from './liste-facultes/liste-facultes.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';

const routes: Routes = [
  {path: "medecins", component : MedecinComponent},
  {path: "add-medecin", component : AddMedecinComponent,canActivate:[medecinGuard]},
  {path: "updateMedecin/:id", component: UpdateMedecinComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "rechercheParFaculte", component : RechercheParFaculteComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeFacultes", component : ListeFacultesComponent},
  {path:'register',component:RegisterComponent},
  { path: 'verifEmail', component: VerifEmailComponent },



  {path: "", redirectTo: "medecins", pathMatch: "full" }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
