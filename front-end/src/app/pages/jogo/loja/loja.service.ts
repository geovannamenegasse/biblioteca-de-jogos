import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Jogo } from '../jogo';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  private readonly API = '../../../assets/jogos.json';

  constructor(private httpClient: HttpClient) { }

  getJogos(){
    return this.httpClient.get<Jogo[]>(this.API)
    .pipe(
      first(),
      tap(jogos => console.log(jogos))
    );
  }
}
