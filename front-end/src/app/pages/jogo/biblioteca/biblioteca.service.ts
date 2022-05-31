import { Jogo } from '../jogo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  private readonly API = '../../../assets/jogos.json';

  constructor(private httpClient: HttpClient) { }

  getJogos(){
    // return [
    //   { id: 1, nome: 'Skyrim' },
    //   { id: 2, nome: 'WoW'},
    //   { id: 3, nome: 'WoW'},
    //   { id: 4, nome: 'WoW'},
    //   { id: 5, nome: 'WoW'},
    //   { id: 6, nome: 'WoW'},
    //   { id: 7, nome: 'WoW'},
    //   { id: 8, nome: 'WoW'}
    // ];
    return this.httpClient.get<Jogo[]>(this.API)
    .pipe(
      first(),
      tap(jogos => console.log(jogos))
    );
  }

  insertJogo(record: Jogo){
    return this.httpClient.post<Jogo>(this.API, record).pipe(first());
  }
}
