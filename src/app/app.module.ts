import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedecinComponent } from './medecins/medecins.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParFaculteComponent } from './recherche-par-faculte/recherche-par-faculte.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UpdateFaculteComponent } from './update-faculte/update-faculte.component';
import { ListeFacultesComponent } from './liste-facultes/liste-facultes.component';
import { TokenInterceptor } from './services/token.interceptor';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';


@NgModule({
  declarations: [
    AppComponent,
    MedecinComponent,
    AddMedecinComponent,
    UpdateMedecinComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParFaculteComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeFacultesComponent,
    UpdateFaculteComponent,
    RegisterComponent,
    VerifEmailComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
