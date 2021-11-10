import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }
  getAllGames(){
    return this.http.get('https://feedclap.herokuapp.com/games');
  }
}