import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games!:Game[] ;

  constructor(
    private gameService:GameService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.gameService.getAll().subscribe((data) => {
      this.games = data;
    });
  }

  navigate(gameName: string){
    this.gameService.getgame(gameName);
    this.router.navigate(['./admin/games/'+gameName]); 
  }

}
