import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/game.model';
import { GameService } from '../shared/game.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  displayedColumns:string[]=['title','description'];

  game!:MatTableDataSource<Game> ;

  constructor(private gameService:GameService) { }

  ngOnInit(): void {
    this.getAllllll();
  }

  getAllllll() {
    this.gameService.getAll().subscribe((data) => {
      this.game = new MatTableDataSource(data);
    });
  }

}
