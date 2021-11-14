import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { GameService } from '../game.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  displayedColumns:string[]=['id','title','description',"reviewPrice","downloadLink"];

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

  filtrar(value: string) {
    this.game.filter = value.trim().toLowerCase();
  }

}
