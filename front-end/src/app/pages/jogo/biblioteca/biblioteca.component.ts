import { JogoService } from './../jogo.service';
import { BibliotecaService } from './biblioteca.service';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Jogo } from '../jogo';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  public jogos$: Observable<Jogo[]>;

  constructor(private bibliotecaService: JogoService) {
    this.jogos$ = this.bibliotecaService.getJogos()
    .pipe(
      catchError(error => {
        console.log(error);
        return of([]);
      })
    );
  }

  ngOnInit(): void {

  }

}
