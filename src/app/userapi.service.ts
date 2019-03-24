import { Injectable } from '@angular/core';

import { User } from '../app/models/user.model';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class userapi {

  baseUrl = "http://192.168.43.232:3000/products";

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get<User[]>(this.baseUrl);

  }

  addUsers(Users: User) {
    return this.httpClient.post(this.baseUrl, Users);
  }

  getUsersById(id: string) {
    return this.httpClient.get<User>(this.baseUrl + '/' + id);
  }
  
  getLogin(email : string, password : string){
    return this.httpClient.get<User>(this.baseUrl + '/' + email + '/' + password);
  }

  delete(id: number) {
    return this.httpClient.delete(this.baseUrl + '/' + id, {responseType: 'text'});
  }

}
