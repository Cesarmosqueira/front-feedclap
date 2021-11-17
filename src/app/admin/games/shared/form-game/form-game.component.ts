import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from '../../game.model';
import { GameService } from '../../game.service';


@Component({
  selector: 'app-form-game',
  templateUrl: './form-game.component.html',
  styleUrls: ['./form-game.component.css']
})
export class FormGameComponent implements OnInit {

  form!: FormGroup;
  errors: any[] = [];

  loading: boolean = false;
  //@Input() libro?: any;
  @Input() game ?:any;
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor(
    private gameService: GameService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        this.game?.name,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
      description: [this.game?.description, [Validators.required]],
      reviewPrice: [this.game?.reviewPrice, [Validators.min(1)]],
      downloadLink: [this.game?.downloadLink, [Validators.required]],

    });
  }

  save(){
    // this.onSave.emit(this.form.value);
    let game = new Game();
    game.id = this.form.value['id'];
    game.name = this.form.value['name'];
    game.description = this.form.value['description'];
    game.reviewPrice = this.form.value['reviewPrice'];
    game.downloadLink = this.form.value['downloadLink'];

    this.gameService.create(game).subscribe(()=>{
      this.gameService.getAll().subscribe();
    })

    this.router.navigate(['admin/games']);
  }

}
