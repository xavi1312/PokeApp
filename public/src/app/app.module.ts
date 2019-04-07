import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CartaPokemonComponent } from './carta-pokemon/carta-pokemon.component';
import { BuscadorPipe } from './pipes/buscador.pipe';
import { FiltreEstadistiquesPipe } from './pipes/filtre-estadistiques.pipe';
import { FiltreTipusPipe } from './pipes/filtre-tipus.pipe';
import { ModalEditComponent } from './modal-edit/modal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaPokemonComponent,
    BuscadorPipe,
    FiltreEstadistiquesPipe,
    FiltreTipusPipe,
    ModalEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalEditComponent ]
})
export class AppModule { }
