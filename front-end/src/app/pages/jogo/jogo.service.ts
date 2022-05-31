import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Jogo } from './jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  private readonly API = 'api/game';

  constructor(private httpClient: HttpClient) { }

  insertJogo(record: Jogo){
    return this.httpClient.post<Jogo>(this.API+'/create', record).pipe(first());
  }
}
