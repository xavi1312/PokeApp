import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../Classes/pokemon';

@Pipe({
  name: 'filtreEstadistiques'
})
export class FiltreEstadistiquesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args == 'pokedex'){

      return value.sort( function(a:Pokemon, b:Pokemon){
        if(a.id < b.id) return -1;
        else return 1;
      });

    }else if(args == 'name'){

      return value.sort( function(a:Pokemon, b:Pokemon){
        if(a.name < b.name) return -1;
        else return 1;
      });

    }else if(args == 'attack'){

      return value.sort( function(a:Pokemon, b:Pokemon){
        if(a.attack < b.attack) return 1;
        else return -1;
      });

    }else{

      return value.sort( function(a:Pokemon, b:Pokemon){
        if(a.height < b.height) return 1;
        else return -1;
      });

    }    
  }

}
