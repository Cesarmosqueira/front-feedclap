import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './game.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiBase: string = environment.apiBase;

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Game[]>(`${this.apiBase}/games`);
  }

  create(game: Game) {
    return this.http.post(`${this.apiBase}/games`, game);
  }

  update(id:number, game: Game) {
    return this.http.put(`${this.apiBase}/games/${id}`, game);
  }

  delete(id:number) {
    return this.http.delete(`${this.apiBase}/games/${id}`);
  }
}
