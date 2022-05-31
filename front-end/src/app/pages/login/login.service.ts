import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'api/user/login';

  constructor(private httpClient: HttpClient) { }

  login(record: User){
    return this.httpClient.post<User>(this.API, record).pipe(first());
  }
}
