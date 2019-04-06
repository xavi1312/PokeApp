import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../Classes/pokemon';

@Pipe({
  name: 'filtreEstadistiques'
})
export class FiltreEstadistiquesPipe implements PipeTransform {

  transform(pokeArray: any, stat:string, ascendent: Boolean): any {

    let pokeArrayFiltrat = [];

    switch(stat){
      case 'pokedex': pokeArrayFiltrat = pokeArray.sort( (a:Pokemon, b:Pokemon) => {return (a.id < b.id)         ?  -1 :  1; });break;
      case 'name'   : pokeArrayFiltrat = pokeArray.sort( (a:Pokemon, b:Pokemon) => {return (a.name < b.name)     ?  -1 :  1; });break;
      case 'attack' : pokeArrayFiltrat = pokeArray.sort( (a:Pokemon, b:Pokemon) => {return (a.attack < b.attack) ?  -1 :  1; });break;
      default       : pokeArrayFiltrat = pokeArray.sort( (a:Pokemon, b:Pokemon) => {return (a.height < b.height) ?  -1 :  1; });break;
    }

    if(!ascendent) { return pokeArrayFiltrat.reverse() }

    return pokeArrayFiltrat;
  }

}
