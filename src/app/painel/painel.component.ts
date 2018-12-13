import { FRASES } from './frases-mock';
import { Frase } from '../shared/frase';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public resposta: String = '';
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0; // Progresso que vai ser passado ao componente progresso através do @Input
  public tentativas: number = 3;
  @Output() public endGame = new EventEmitter(); // emite um evento para o componente pai, pois o painel após o fim do jogo será destruido


  constructor() {
    this.atualizaRodada();
  }

  public atualizaResposta(resposta: Event): void {   // evento do input
     this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void { // evento do click
         if (this.resposta == this.rodadaFrase.frasePtBr) { // valida resposta com base no array de frases
            this.rodada++;
            this.progresso += 25;

            if (this.rodada === 4) {
               this.endGame.emit('vitoria');
            }

        this.atualizaRodada();
      }
      else {
        this.tentativas --;
           if (this.tentativas == -1) {
              this.endGame.emit('derrota');
           }
      }
  }

  public atualizaRodada(): void {
      this.rodadaFrase = this.frases[this.rodada]; // Busca a frase com base na rodada atual
      this.resposta = ''; // zera o campo
  }

  ngOnInit() {}

  ngOnDestroy() {

  }


}
