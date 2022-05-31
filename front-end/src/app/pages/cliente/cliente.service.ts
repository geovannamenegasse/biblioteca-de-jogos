import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = 'api/client';
  
  constructor(private httpClient: HttpClient) { }

  insertCliente(record: Cliente){
    return this.httpClient.post<Cliente>(this.API+'/create', record).pipe(first());
  }
}
