import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from 'src/app/admin/games/game.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiBase: string = environment.apiBase;
  constructor(private http: HttpClient) {}

  getLastGames(){
    return this.http.get<Game[]>(`${this.apiBase}/games`);
  }
}
