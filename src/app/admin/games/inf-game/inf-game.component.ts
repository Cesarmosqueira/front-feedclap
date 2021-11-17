import { Component, OnInit } from '@angular/core';
import { Game, Genre } from '../game.model';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inf-game',
  templateUrl: './inf-game.component.html',
  styleUrls: ['./inf-game.component.css']
})
export class InfGameComponent implements OnInit {
  
  game:Game;
  genres!:Genre[];
  name!:string;

  constructor(private gameService:GameService,private router: Router) {}

  ngOnInit(): void {
    this.name=this.router.url.split("/")[this.router.url.split("/").length-1];
    this.getgame(this.name);
    this.getgenresbygame(this.name);
  }

  getgame(name:string) {
    this.gameService.getgame(name).subscribe((data) => {
      this.game = data;
      //console.log(this.game);
      //console.log(this.router.url);
    });
  }

  getgenresbygame(name:string) {
    this.gameService.getgenres_game(name).subscribe((data) => {
      this.genres = data;
      console.log(this.genres);
      //console.log(this.router.url);
    });
  }

  goToLink() {
    window.location.href=this.game.downloadLink;
  }

}
