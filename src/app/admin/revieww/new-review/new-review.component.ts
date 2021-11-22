import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from '../revieww.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  constructor(private reviewService: ReviewService, private router: Router) { }

  ngOnInit(): void {
  }

  create(review: any) {
    this.reviewService.create(review).subscribe(
      () => {
        this.router.navigate(['admin/review']);
        
      },
      (error) => {}
    );
  }
}
