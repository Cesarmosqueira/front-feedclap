import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Game } from '../game.model';
import { GameService } from '../game.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  game!:MatTableDataSource<Game> ;
  displayedColumns:string[]=['id','title','description',"reviewPrice","downloadLink","acciones"];
  cantidad: number = 0;

  constructor(
    private gameService:GameService, 
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.gameService.getAll().subscribe((data) => {
      this.cantidad = data.length;
      this.game = new MatTableDataSource(data);
      this.game.sort = this.sort;
    });
  }

  filtrar(event: Event) {
    this.game.filter = (<HTMLInputElement>event.target).value.trim().toLowerCase();
  }

  eliminar(id: number){
    const ok = confirm("¿Estás seguro de eliminar el juego?")
    if (ok){
      this.gameService.delete(id).subscribe(()=>{
        this.getAll();
      })
    }
  }

  mostrarMas(e: any){
    this.gameService.getAll().subscribe((data) => {
      this.cantidad = data.length;
      this.game = new MatTableDataSource(data);
      this.game.sort = this.sort;
    });
  }

}
