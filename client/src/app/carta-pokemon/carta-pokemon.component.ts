import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../Classes/pokemon';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonsService } from '../Serveis/pokemons.service';

@Component({
  selector: 'app-carta-pokemon',
  templateUrl: './carta-pokemon.component.html',
  styleUrls: ['./carta-pokemon.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CartaPokemonComponent implements OnInit {
  
  constructor(config: NgbModalConfig, private modalService: NgbModal, private pokeService: PokemonsService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  
  @Input() pokemon     : Pokemon;
  @Input() mostrarStats: Boolean;
  @Input() maxStats    : any;
  private isGirar: Boolean = false;
  private poke: Pokemon;

  eliminar(){
    this.pokeService.deletePokemon(this.pokemon.id).subscribe((response)=> console.log(response));
  }
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
  open(content) {
    this.modalService.open(content);
  }

  rebreCanvis($event){
    this.poke = $event;
  }
  saveEdit(){
    if(this.poke){ 
      this.pokeService.editpokemon(this.poke).subscribe((response)=> console.log(Response));
    }else alert("No pots grardar sense modificar un stat");
  }
}
