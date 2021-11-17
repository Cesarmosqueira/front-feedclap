import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/admin/games/game.model';
import { HomeService } from '../shared/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  lastGames!:Game[];
  constructor(private homeService:HomeService,private router:Router) {}

  ngOnInit(): void {
    this.homeService
    .getLastGames()
    .subscribe((games) => (this.lastGames=games));
  }
  navigate(gameName: string){
    this.homeService.getGameByName(gameName);
    this.router.navigate(['./admin/games/'+gameName]); 
  }

}
