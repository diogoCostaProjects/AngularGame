import { Coracao } from '../shared/coracao.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})

export class TentativasComponent implements OnInit, OnChanges {

  public coracoes: Array<Coracao> = [new Coracao(true), new Coracao(true), new Coracao(true)];
  @Input() public tentativas: number;
   // Instancia os corações na barrinha de tentativass

   constructor() {

   }
// Ao alterar o valor dispara OnChanges
    ngOnChanges() {
      if (this.tentativas !== this.coracoes.length) {
        // decrementa os corações verificando a quantidade de tentativas e subtraindo pelo tamanho do array de corações
        let indice = this.coracoes.length - this.tentativas;
        this.coracoes[indice - 1].cheio = false; // Passa false para o constructor de corações para instanciar o coração vazio
      }

    }
    ngOnInit() {

    }


}
