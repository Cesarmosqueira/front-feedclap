import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/admin/games/game.model';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  lastGames!:Game[];
  constructor(private homeService:HomeService) {}

  ngOnInit(): void {
    this.homeService
    .getLastGames()
    .subscribe((games) => (this.lastGames=games));
  }

}
