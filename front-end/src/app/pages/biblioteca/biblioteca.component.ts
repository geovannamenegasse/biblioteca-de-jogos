import { BibliotecaService } from './biblioteca.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  public jogos: any[] = [];

  constructor(private bibliotecaService: BibliotecaService) { }

  ngOnInit(): void {
    this.jogos = this.bibliotecaService.getJogos();
  }

}
