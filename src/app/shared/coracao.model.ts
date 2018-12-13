export class Coracao {
// Esse boolean valida qual URL vai ser setada
  constructor(public cheio: boolean,
                public urlCoracaoCheio: string = '/assets/coracao_cheio.png',
                public urlCoracaoVazio: string = '/assets/coracao_vazio.png') {
  } // Variaveis criadas e injetadas no componente

  public getCoracao(): string {
      if (this.cheio) {
          return this.urlCoracaoCheio;
      }
      else {
          return this.urlCoracaoVazio;
      }
  }

}


