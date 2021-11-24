import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorageService } from 'src/app/auth/shared/user-storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  we:any
  username!:string;
  tipo!:string;
  private key: string = 'ng-auth';

  constructor(private router: Router,private userStorageService: UserStorageService) { }

  ngOnInit(): void {
    this.getall();
  }

  getall(){
    let user = localStorage.getItem(this.key);

    if (user) {
      let objUser = JSON.parse(user);
      this.username=objUser.user.username;

      if(objUser.user.type==1){
        this.tipo='desarrollador';
      }
      else{
        this.tipo='reviewer';
      }
      
    }
    else{
      this.username="";
    }
  }

  mostrar() {
    
    this.we=document.getElementById("busqueda");
    this.router.navigate(['./admin/search/'+this.we.value]); 
    window.location.pathname='/admin/search/'+this.we.value;
    window.location.href='http://localhost:4200/admin/search/'+this.we.value;
    
  }

  signOut(): void {
    this.userStorageService.destroy();
    this.router.navigate(['/auth/login']);
  }

  verperfil(){
    this.router.navigate(['./admin/profile/'+this.username]);
  }
}


