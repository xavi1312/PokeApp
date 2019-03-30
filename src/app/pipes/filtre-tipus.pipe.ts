import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreTipus'
})
export class FiltreTipusPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(args == '') return value;

    return value.filter(pokemon => pokemon.types.includes(args));
  }

}
