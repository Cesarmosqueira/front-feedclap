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
  private key: string = 'ng-auth';
  userid!:number;

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
      imgLink: [this.game?.imgLink, [Validators.required]],
      downloadLink: [this.game?.downloadLink, [Validators.required]],

    });
  }

  save(){
    
    let user = localStorage.getItem(this.key);
    if (user) {
      let objUser = JSON.parse(user);
      this.userid=objUser.user.id;

      let game = new Game();
      game.name = this.form.value['name'];
      game.description = this.form.value['description'];
      game.reviewPrice = this.form.value['reviewPrice'];
      game.img_link = this.form.value['imgLink'];
      game.downloadLink = this.form.value['downloadLink'];

      game.developerId=this.userid;

      this.gameService.create(game).subscribe(()=>{
        this.gameService.getAll().subscribe();
      })
      this.router.navigate(['admin/games']);
    }
  }

}
