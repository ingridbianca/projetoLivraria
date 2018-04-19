import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { AlertaComponent } from './alerta/alerta.component';
import { CardComponent } from './card/card.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';


@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CabecalhoComponent,
    AlertaComponent,
    CardComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
