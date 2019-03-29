import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPokemonComponent } from './carta-pokemon/carta-pokemon.component';
import { BuscadorPipe } from './pipes/buscador.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartaPokemonComponent,
    BuscadorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
