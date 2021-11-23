import { Component, OnInit } from '@angular/core';
import { Category, Game, Genre } from '../game.model';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import {Review} from '../../revieww/revieww.model';
import {ReviewService} from '../../revieww/revieww.service';

@Component({
  selector: 'app-inf-game',
  templateUrl: './inf-game.component.html',
  styleUrls: ['./inf-game.component.css']
})
export class InfGameComponent implements OnInit {
  
  game: Game;
  genres!: Genre[];
  categories!: Category[];
  reviews!: Review[];
  name!: string;
  stars: number[]

  constructor(private gameService:GameService,
			  private reviewService: ReviewService,
			  private router: Router) {}

  ngOnInit(): void {
    this.name=this.router.url.split("/")[this.router.url.split("/").length-1];
    this.getgame(this.name);
    this.getgenresbygame(this.name);
    this.getcateoriesbygame(this.name);
	this.getReviews(this.name);
  }
  
  getReviews(name: string) {
	  this.reviewService.getreviewsbygame(name)
		  .subscribe((data) => {
			  console.log('Reviews loaded', data);
			this.reviews = data;
	  });
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
      console.log('Genres loaded', this.genres);
      //console.log(this.router.url);
    });
  }
  getcateoriesbygame(name:string) {
    this.gameService.getcategories_game(name).subscribe((data) => {
      this.categories = data;
      console.log('Categories loaded', this.categories);
      //console.log(this.router.url);
    });
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  goToLink() {
    window.location.href=this.game.downloadLink;
  }

}
