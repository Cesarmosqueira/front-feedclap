import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/shared/user.model';
import { environment } from 'src/environments/environment';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiBase: string = environment.apiBase;

  constructor(private http:HttpClient) { }

  getuser(username:string) {
    return this.http.get<Profile>(`${this.apiBase}/users/${username}`);
  }

  getcant_siguiendo(username:string){
    return this.http.get<number>(`${this.apiBase}/users/cant_followers/${username}`);
  }

  getcantseguidores(username:string){
    return this.http.get<number>(`${this.apiBase}/users/cant_following/${username}`);
  }

  getcant_reviews(username:string){
    return this.http.get<number>(`${this.apiBase}/review/cant_reviews/${username}`);
  }

  getcant_juegoscreados(username:string){
    return this.http.get<number>(`${this.apiBase}/users/cant_games/${username}`);
  }
}
