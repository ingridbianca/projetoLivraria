import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  livros: Array<{ titulo: string, autor: string, foto: string, preco: string }> =
    [{ titulo: "Caraval", autor: "Stephanie Garber", foto: "../../assets/fotos/caraval.jpg", preco: "R$20,00" },
    { titulo: "Kenobi", autor: "John Jackson Miller", foto: "../../assets/fotos/kenobi.jpg", preco: "R$35,00" },
    { titulo: "Perdida", autor: "Carina Rissi", foto: "../../assets/fotos/perdida.jpg", preco: "R$20,00" },
    { titulo: "Encontrada", autor: "Carina Rissi", foto: "../../assets/fotos/encontrada.jpg", preco: "R$25,00" }];

  mostraLivros: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  mostrarLivros() {
    this.mostraLivros = !this.mostraLivros;
  }
}
