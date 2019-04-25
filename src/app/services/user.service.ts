import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  login(user: User): void {
    this.http.post(this.baseUrl, user, {observe: 'response'}).subscribe(
      res => {
        console.log(res.headers);
      }
    );
  }
}
