import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  getJogos(){
    return [
      { id: 1, nome: 'Skyrim' },
      { id: 2, nome: 'WoW'},
      { id: 3, nome: 'WoW'},
      { id: 4, nome: 'WoW'},
      { id: 5, nome: 'WoW'},
      { id: 6, nome: 'WoW'},
      { id: 7, nome: 'WoW'},
      { id: 8, nome: 'WoW'}
    ];
  }

  getJogo(id: number){
    let jogos = this.getJogos();
    for(let i = 0; i < jogos.length; i++){
      let jogo = jogos[i];
      if(jogo.id == id){
        return this.getJogos()[i];
      }
    }
    return null;
  }

  constructor() { }
}
