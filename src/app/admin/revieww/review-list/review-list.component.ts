import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Review } from '../revieww.model';
import { ReviewService } from '../revieww.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  gamenamee!:string;
  username_sesion!:string;
  dataSource!: MatTableDataSource<Review>;
  displayedColumns: string[] = ['id','Description',"Rating", "acciones"];
  cantidad: number = 0;
  private key: string = 'ng-auth';

  constructor(private reviewService:ReviewService, 
    private router: Router) { }

  ngOnInit(): void {

    let user = localStorage.getItem(this.key);

    if (user) {
      let objUser = JSON.parse(user);
      this.username_sesion=objUser.user.username;
    }
    
    this.gamenamee=this.router.url.split("/")[this.router.url.split("/").length-1];
    this.gettall(this.gamenamee);
  }

  gettall(gamename:string){
    this.reviewService.getReviewsFromGame(gamename).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.cantidad=data.length;
    });
  }

  drop_review(id: number){
    const ok = confirm("¿Estás seguro de eliminar el juego?")
    if (ok){
      this.reviewService.delete(id).subscribe(()=>{
        this.gettall(this.gamenamee);
      })
    }
  }

  accept_review(gamename: string){
    
  }
}
