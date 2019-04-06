import { Component } from '@angular/core';
import { Pokemon } from './Classes/pokemon';
import { PokemonsService } from './Serveis/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isCollapsed = true;
  pokemons: Pokemon[] = [];
  mostrarStats: Boolean = true;
  buscador: String = "";
  filtreEstadistiques: string = "pokedex";
  filtreTipus: String = '';
  private isAscendent = true;

  maxStats = {
    hp:Number,
    attack: Number,
    defense: Number,
    speed: Number
  }

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.getPokemons();
  }
  getPokemons() {
    this.pokemonsService.getPokemonsAPI()
    .subscribe(pokemons => {
      this.pokemons = pokemons;

      this.maxStats.hp = Math.max.apply(Math, pokemons.map(function(pok) { return pok.hp; }));
      this.maxStats.attack = Math.max.apply(Math, pokemons.map(function(pok) { return pok.attack; }));
      this.maxStats.defense = Math.max.apply(Math, pokemons.map(function(pok) { return pok.defense; }));
      this.maxStats.speed = Math.max.apply(Math, pokemons.map(function(pok) { return pok.speed; }));
    });
  }
}