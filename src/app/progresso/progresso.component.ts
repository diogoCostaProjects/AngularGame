import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  @Input() public progresso: number = 0; // Input torna possível a passgem de dados do componente pai para o componente filho

  constructor() { }

  ngOnInit() {
  }

}
