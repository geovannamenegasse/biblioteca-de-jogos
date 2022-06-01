import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'api/user/login';

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  login(record: User){
    return this.httpClient.post<User>(this.API, record).pipe(first());
  }
}
