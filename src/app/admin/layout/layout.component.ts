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
  

  constructor(private router: Router,private userStorageService: UserStorageService) { }

  ngOnInit(): void {
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
}


