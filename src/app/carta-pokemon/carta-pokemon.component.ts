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

  ngOnInit() {  }

}
