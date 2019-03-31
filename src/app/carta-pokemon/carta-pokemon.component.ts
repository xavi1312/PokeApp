import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Pokemon } from '../Classes/pokemon';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  form:any = {
    hp: String,
    attack: String,
    defensa: String,
    speed: String
  }
  isGirar: Boolean = false;
  @Input() pokemon     : Pokemon;
  @Input() mostrarStats: Boolean;
  @Input() maxStats    : any;

  ngOnInit() {
    this.pokemon.type = []; 
    this.classe();
    this.form.hp = this.pokemon.hp.toString();
    this.form.attack = this.pokemon.attack.toString();
    this.form.defensa = this.pokemon.defense.toString();
    this.form.speed = this.pokemon.speed.toString();
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
  saveEdit(){
    console.table(this.form);
  }
}
