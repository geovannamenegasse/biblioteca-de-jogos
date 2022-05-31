import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { ICustomWindow, WindowRefService } from '../login/windowref.service';
import { Jogo } from './jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  private _window: ICustomWindow;
  private readonly API = 'api/game';

  constructor(private httpClient: HttpClient,
            private windowRef: WindowRefService) {  
    this._window = windowRef.nativeWindow;
  }

  insertJogo(record: Jogo){
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/json', 
        'auth' : this._window.localStorage.getItem('token') || ''
      });
    return this.httpClient.post<Jogo>(this.API+'/create', record, { headers : headers }).pipe(first());
  }
}
