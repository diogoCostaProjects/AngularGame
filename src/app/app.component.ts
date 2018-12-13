import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public running: boolean = true
  public endResult: string


  public endGame(tipo: string): void {
     this.running = false;
     this.endResult = tipo;
  }

  public restartGame(): void { // reinicia o jogo zerando os atributos
     this.running = true;
     this.endResult = undefined;
  }
}
