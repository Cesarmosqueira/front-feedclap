import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

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
      (_error) => {}
    );
  }
}
