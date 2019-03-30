import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Pokemon } from '../Classes/pokemon';
@Component({
  selector: 'app-carta-pokemon',
  templateUrl: './carta-pokemon.component.html',
  styleUrls: ['./carta-pokemon.component.scss']
})
export class CartaPokemonComponent implements OnInit {
  
  constructor() { }

  @Input() pokemon     : Pokemon;
  @Input() mostrarStats: Boolean;
  @Input() maxStats    : any;

  ngOnInit() {
    this.pokemon.type = []; 
    this.classe();
  }
  classe(){
    let tipos : String ="";

    this.pokemon.types.forEach(tipo => {
      tipos = tipos +""+ tipo;
    });
    this.pokemon.type.push("bg-"+tipos);
    this.pokemon.type.push("br-"+tipos);
  }

}
