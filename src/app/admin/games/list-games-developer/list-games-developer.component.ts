import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../game.model';
import { GameService } from '../game.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-games-developer',
  templateUrl: './list-games-developer.component.html',
  styleUrls: ['./list-games-developer.component.css']
})
export class ListGamesDeveloperComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  usernamee!:string;
  username_sesion!:string;
  dataSource!: MatTableDataSource<Game>;
  displayedColumns: string[] = ['id', 'name', 'description', 'reviewPrice',"downloadLink", 'acciones'];
  cantidad: number = 0;
  private key: string = 'ng-auth';

  constructor(private gameService:GameService, 
    private router: Router) { }

  ngOnInit(): void {

    let user = localStorage.getItem(this.key);

    if (user) {
      let objUser = JSON.parse(user);
      this.username_sesion=objUser.user.username;
    }
    
    this.usernamee=this.router.url.split("/")[this.router.url.split("/").length-1];
    this.gettall(this.usernamee);
  }

  gettall(username:string){
    this.gameService.getlistgamesdeveloper(username).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.cantidad=data.length;
    });
  }

  filtrar(event: Event) {
    this.dataSource.filter = (<HTMLInputElement>event.target).value.trim().toLowerCase();
  }

  eliminar(id: number){
    const ok = confirm("¿Estás seguro de eliminar el juego?")
    if (ok){
      this.gameService.delete(id).subscribe(()=>{
        this.gettall(this.usernamee);
      })
    }
  }

  lista_reviews(gamename: string){
    this.router.navigate(['./admin/list-reviews/'+gamename]); 
  }
}
