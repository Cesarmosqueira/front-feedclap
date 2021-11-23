import {Component, OnInit} from '@angular/core';
import {Game} from '../../games/game.model';
import {Review} from '../revieww.model';

@Component({
  selector: 'app-inf-review',
  templateUrl: './inf-review.component.html',
  styleUrls: ['./inf-review.component.css']
})
export class InfReviewComponent implements OnInit {

  review:Review;
  game!:Game[];
  name!:string;

  //constructor(private reviewService:ReviewService,private router: Router) { }
  constructor() { }

  ngOnInit(): void {
    // this.name=this.router.url.split("/")[this.router.url.split("/").length-1];
    // this.getreviewsbygame(this.name);    
  }

  // getreviewsbygame(name:string) {
  //   this.reviewService.getreviews_game(name).subscribe((data) => {
  //     this.game = data;
  //     console.log(this.game);
  //   });
  // }

}

