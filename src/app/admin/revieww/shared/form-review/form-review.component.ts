import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from 'src/app/admin/games/game.model';
import { Review } from '../../revieww.model';
import { ReviewService } from '../../revieww.service';

@Component({
  selector: 'app-form-review',
  templateUrl: './form-review.component.html',
  styleUrls: ['./form-review.component.css']
})
export class FormReviewComponent implements OnInit {

  form! :FormGroup;
  errors: any[] = [];

  loading: boolean = false;
  //@Input() libro?: any;
  @Input() review ?:any;
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor(
    private game: Game,
    private reviewService: ReviewService,
    private formBuilder: FormBuilder,
    private router: Router)  { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Description: [this.review?.description, [Validators.required]],
      GameTitle: [this.game.name],
      GameID: [this.game.id],
    })
  }

  save(){
    // this.onSave.emit(this.form.value);
    let review = new Review();
    review.id = this.form.value['id'];
    review.description = this.form.value['description'];
    review.state = "En revisión";
    review.rating = 0;
	  review.userId = 0;
	  review.gameId = 1;

    this.reviewService.create(review).subscribe(()=>{
      this.reviewService.getAll().subscribe();
    })

    this.router.navigate(['admin/revieww']);
  }

}
