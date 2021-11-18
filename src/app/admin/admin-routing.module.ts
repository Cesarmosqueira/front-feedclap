import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EditGameComponent } from './games/edit-game/edit-game.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { NewGameComponent } from './games/new-game/new-game.component';
import { InfGameComponent } from './games/inf-game/inf-game.component';
import { SearchGamesComponent } from './games/search-games/search-games.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'games',
        component:GameListComponent,
      },
      {
        path:'games/new',
        component:NewGameComponent,
      },
      {
        path:'games/:id/edit',
        component:EditGameComponent,
      },
      {
        path:'games/:game',
        component:InfGameComponent,
      },
      {
        path:'search/:name',
        component:SearchGamesComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
