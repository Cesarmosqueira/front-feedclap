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
    console.log(this.name);
    this.gameService.getgamesbykeyword(this.name).subscribe((data) => {
      this.games = data;
    });
  }

  navigate(gameName: string){
    this.gameService.getgame(gameName);
    this.router.navigate(['./admin/games/'+gameName]); 
  }



}
