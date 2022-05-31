import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { ICustomWindow, WindowRefService } from '../login/windowref.service';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private _window: ICustomWindow;
  private readonly API = 'api/client';

  constructor(private httpClient: HttpClient, 
              private windowRef: WindowRefService) 
  {
    this._window = windowRef.nativeWindow;
  }

  insertCliente(record: Cliente){
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/json', 
        'auth' : this._window.localStorage.getItem('token') || ''
      });
    return this.httpClient.post<Cliente>(this.API+'/create', record, { headers : headers }).pipe(first());
  }
}
