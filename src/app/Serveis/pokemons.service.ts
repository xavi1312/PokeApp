import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../Classes/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/pokemons/';

  public totsPokemons(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.url);
  }
}
