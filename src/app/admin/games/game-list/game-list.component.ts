import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/game.service';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor(private gameService:GameService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll():void{
    this.gameService.getAllGames()
    .subscribe((data)=> console.log(data))
  }

}
