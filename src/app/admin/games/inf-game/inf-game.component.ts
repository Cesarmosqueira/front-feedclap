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
  reviewerMap: Map<number, string>;

  constructor(private gameService:GameService,
			  private reviewService: ReviewService,
			  private router: Router) {}

  ngOnInit(): void {
    this.name=this.router.url.split("/")[this.router.url.split("/").length-1];
    this.getgame(this.name);
    this.getcateoriesbygame(this.name);
	this.getReviews(this.name);
	this.reviewerMap = new Map<number, string>();
  }
  
  getReviews(name: string) {
	  this.reviewService.getReviewsFromGame(name)
		  .subscribe((data) => {
				  console.log('Reviews loaded', data);
				  this.reviews = data;
					console.log(data);
					for(let i = 0; i < data.length; i++){
				    this.reviewService.getReviewerName(data[i].userId)
								.subscribe((reviewerName) => {
										this.reviewerMap.set(data[i].id, reviewerName.username);	
								});
					}
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
  // mkReviewerMap(reviewId: number) {
  //     console.log("About to map ", reviewId);
  //   this.reviewService.getreviewsreviewername(reviewId)
  //   	.subscribe((data) => { 
  //   		this.reviewerMap.set(reviewId, data);
  //   	});
  // }
  goToLink() {
    window.location.href=this.game.downloadLink;
  }

}
