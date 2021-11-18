import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	form = new FormGroup({
		username: new FormControl('username'),
		password: new FormControl('password'),
	});
	
	isLogged : boolean = false;
	constructor(
		private userService: UserService) { }

	ngOnInit(): void {
		this.login("abcd123", "juan");
	}

	login(token : string, username : string) : void{
		this.userService.login(token, username)
			.subscribe((data) => { this.isLogged = data; });
	}


	performLogin() {
		console.log("asd");
	}
}
