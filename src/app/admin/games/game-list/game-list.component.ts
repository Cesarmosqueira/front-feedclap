import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Game } from '../game.model';
import { GameService } from '../game.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

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
