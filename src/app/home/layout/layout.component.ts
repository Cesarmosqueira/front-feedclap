import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  we:any
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  mostrar() {
    this.we=document.getElementById("busqueda");
    this.router.navigate(['./admin/search/'+this.we.value]); 
  }

}
