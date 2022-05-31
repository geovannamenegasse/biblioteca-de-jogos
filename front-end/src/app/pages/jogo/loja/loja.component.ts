import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Jogo } from '../jogo';
import { LojaService } from './loja.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  public jogos$: Observable<Jogo[]>;

  constructor(private lojaService: LojaService) {
    this.jogos$ = this.lojaService.getJogos()
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
