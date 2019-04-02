import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../Classes/pokemon';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditComponent } from '../modal-edit/modal-edit.component'

@Component({
  selector: 'app-carta-pokemon',
  templateUrl: './carta-pokemon.component.html',
  styleUrls: ['./carta-pokemon.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CartaPokemonComponent implements OnInit {
  
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  
  isGirar: Boolean = false;
  @Input() pokemon     : Pokemon;
  @Input() mostrarStats: Boolean;
  @Input() maxStats    : any;
  poke: Pokemon;

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
    console.table(this.poke);
  }
}
