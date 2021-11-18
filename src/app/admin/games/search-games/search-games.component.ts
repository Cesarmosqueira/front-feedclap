import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-search-games',
  templateUrl: './search-games.component.html',
  styleUrls: ['./search-games.component.css']
})
export class SearchGamesComponent implements OnInit {

  name!:string;
  games!:Game[];

  constructor(private gameService:GameService,private router: Router) { }

  ngOnInit(): void {
    
    this.name=this.router.url.split("/")[this.router.url.split("/").length-1];
    this.getAll();
  }

  getAll() {
    this.gameService.getgamebykeyword(this.name).subscribe((data) => {
      this.games = data;
    });
  }

}
