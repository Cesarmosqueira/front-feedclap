import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { Game } from '../game.model';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {}

  create(game: any) {

    this.gameService.create(game).subscribe(
      () => {
        this.router.navigate(['admin/games']);
        
      },
      (error) => {}
    );
  }
}