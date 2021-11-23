import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  revieww!:MatTableDataSource<Review> ;
  displayedColumns:string[]=['id','Description',"Rating", "acciones"];
  cantidad: number = 0;

  constructor(
    private reviewService:ReviewService, 
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.reviewService.getAll().subscribe((data) => {
      this.cantidad = data.length;
      this.revieww = new MatTableDataSource(data);
      this.revieww.sort = this.sort;
    });
  }

  filtrar(event: Event) {
    this.revieww.filter = (<HTMLInputElement>event.target).value.trim().toLowerCase();
  }

  eliminar(id: number){
    const ok = confirm("¿Estás seguro de eliminar la review?")
    if (ok){
      this.reviewService.delete(id).subscribe(()=>{
        this.getAll();
      })
    }
  }

  mostrarMas(e: any){
    this.reviewService.getAll().subscribe((data) => {
      this.cantidad = data.length;
      this.revieww = new MatTableDataSource(data);
      this.revieww.sort = this.sort;
    });
  }

}
