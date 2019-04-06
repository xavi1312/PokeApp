import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args == '') return value;
    const resultatsBusqueda = [];
    for(const pokemon of value){
      if(pokemon.name.toLowerCase().indexOf(args.toLowerCase()) > -1){
        resultatsBusqueda.push(pokemon);
      }
    }
    return resultatsBusqueda;
  }

}
