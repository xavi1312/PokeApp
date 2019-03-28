import { Component } from '@angular/core';
import { Pokemon } from './Classes/pokemon';
import { PokemonsService } from './Serveis/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemonApp';
  public isCollapsed = true;
  pokemons: Pokemon[] = [];
  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.showConfig();
  }
  showConfig() {
    this.pokemonsService.totsPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }
}