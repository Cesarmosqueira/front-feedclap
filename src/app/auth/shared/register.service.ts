import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiBase: string = environment.apiBase;

  constructor(private http:HttpClient) { }

  register_user(user: User){
    return this.http.post(`${this.apiBase}/signup`,user);
  }

}
