import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../Classes/pokemon';

@Component({
  selector: 'app-carta-pokemon',
  templateUrl: './carta-pokemon.component.html',
  styleUrls: ['./carta-pokemon.component.scss']
})
export class CartaPokemonComponent implements OnInit {
  
  constructor() { }

  @Input() pokemon : Pokemon;

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
    console.log(this.pokemon.type)
  }

}
