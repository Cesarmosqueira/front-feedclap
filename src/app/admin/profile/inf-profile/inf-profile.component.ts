import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/shared/user.model';
import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-inf-profile',
  templateUrl: './inf-profile.component.html',
  styleUrls: ['./inf-profile.component.css']
})
export class InfProfileComponent implements OnInit {

  usernamee!:string;
  userr:Profile;
  cantseguidores:number;
  cantsiguiendo:number;
  cantreviews:number;
  cantgamesss:number;

  constructor(private profileservice:ProfileService,private router: Router) { }

  ngOnInit(): void {
    this.usernamee=this.router.url.split("/")[this.router.url.split("/").length-1];
    this.getuser(this.usernamee);
    this.getcant_seguidores(this.usernamee);
    this.getcant_siguiendo(this.usernamee);
    this.getcantreviews(this.usernamee);
    this.getcantgamesssss(this.usernamee);
  }

  getuser(username:string) { 
    this.profileservice.getuser(username).subscribe((data) => {
      this.userr = data;
    });
  }

  getcant_seguidores(username:string) {
    this.profileservice.getcantseguidores(username).subscribe((data2) => {
      this.cantseguidores = data2;
    });
  }

  getcant_siguiendo(username:string) {
    this.profileservice.getcant_siguiendo(username).subscribe((data2) => {
      this.cantsiguiendo = data2;
    });
  }

  getcantreviews(username:string){
    this.profileservice.getcant_reviews(username).subscribe((data2) => {
      this.cantreviews = data2;
    });
  }

  getcantgamesssss(username:string){
    this.profileservice.getcant_juegoscreados(username).subscribe((data2) => {
      this.cantgamesss = data2;
    });
  }

}
