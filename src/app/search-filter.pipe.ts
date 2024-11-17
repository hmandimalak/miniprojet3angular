import { Pipe, PipeTransform } from '@angular/core';
import { Medecin } from './model/medecin.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: Medecin[], filterText: string): any { 
    return list ? list.filter(item => item.nommedecin.toLowerCase().includes(filterText)) : []; }

}
