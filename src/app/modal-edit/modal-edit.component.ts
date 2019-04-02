import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from '../Classes/pokemon';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  @Input() pokemon: Pokemon; 
  @Output() pokemon_ = new EventEmitter<any>();

  poke: Pokemon;

  ngOnInit() {
    this.poke = clone(this.pokemon);
    
    function clone(obj) {
      if (null == obj || "object" != typeof obj) return obj;
      var copy = obj.constructor();
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)){ 
          copy[attr] = obj[attr];
        }
      }
      return copy;
    }
   }

  enviarCanvis(){
    this.pokemon_.emit(this.pokemon);
  }
}
