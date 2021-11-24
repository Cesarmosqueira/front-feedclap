import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Game, GameGenre, Genre } from './game.model';

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

  getgame(name:string) {
    return this.http.get<Game>(`${this.apiBase}/games/search/${name}`);
  }

  getgenres_game(name:string){
    return this.http.get<Genre[]>(`${this.apiBase}/games/genre/${name}`);
  }

  getcategories_game(name:string){
    return this.http.get<Genre[]>(`${this.apiBase}/games/categories/${name}`);
  }

  getgamesbykeyword(name:string){
    return this.http.get<Game[]>(`${this.apiBase}/games/searches/${name}`);
  }

  creategamegenre(gamegenre:GameGenre){
    return this.http.post(`${this.apiBase}/genre/gamegenre`,gamegenre);
  }
}
