import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../shared/register.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    username!:any;
    name!:any;
    email!:any;
    type!:any;
    password!:any;

		constructor(private registerService: RegisterService, private router: Router) { }

		ngOnInit(): void {
		}

    create_user() {
      let userr = new User()

      this.username=document.getElementById("username");
      this.name=document.getElementById("name");
      this.email=document.getElementById("email");
      this.password=document.getElementById("password");
      this.type=document.getElementById("type");

      userr.username=this.username.value;
      userr.name=this.name.value;
      userr.email=this.email.value;
      userr.password=this.password.value;
      if(this.type.textContent=="Developer"){
        userr.type=1;
		console.log("REGISTERING A DEVELOPER");
      }
      if(this.type.textContent=="Reviewer"){
        userr.type=2;
      }

      this.registerService.register_user(userr).subscribe(
        (response) => {
          this.router.navigate(['auth/login']);
          
        },
        (_error) => {}
      );
    }

}
