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
  @Input() libro ?:any;
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor(
    private gameService: GameService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [
        this.libro?.name,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
      description: [this.libro?.description, [Validators.required]],
      price: [this.libro?.reviewPrice, [Validators.min(1)]],
      link: [this.libro?.downloadLink, [Validators.required]],

    });
  }

  save(){
    this.onSave.emit(this.form.value);
  }

}
