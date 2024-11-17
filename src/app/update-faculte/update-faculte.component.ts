import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Faculte } from '../model/faculte.model';

@Component({
  selector: 'app-update-faculte',
  templateUrl: './update-faculte.component.html',
  styles: [
  ]
})
export class UpdateFaculteComponent {
@Input()
faculte! : Faculte;

@Input()
ajout!:boolean;

@Output()
faculteUpdated = new EventEmitter<Faculte>();

ngOnInit(): void {
  console.log("ngOnInit du composant UpdateFaculte ",this.faculte);
}
saveFaculte(){
  this.faculteUpdated.emit(this.faculte);
  }
  

  
}
