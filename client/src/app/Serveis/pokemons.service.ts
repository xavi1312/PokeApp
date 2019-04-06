import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../Classes/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/pokemons/';

  public getPokemonsAPI(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.url);
  }
  
  public editpokemon(pokemon: Pokemon):Observable<Pokemon>{
    
    return this.http.put<Pokemon>(this.url+pokemon.id, pokemon);
  }
  
  public deletePokemon(pokeId: Number):Observable<any>{
    return this.http.delete(this.url + pokeId);
  }
}
