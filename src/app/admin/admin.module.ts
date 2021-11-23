import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MaterialModule} from '../material/material.module';
import {AdminRoutingModule} from './admin-routing.module';
import {EditGameComponent} from './games/edit-game/edit-game.component';
import {GameListComponent} from './games/game-list/game-list.component';
import {InfGameComponent} from './games/inf-game/inf-game.component';
import {NewGameComponent} from './games/new-game/new-game.component';
import {SearchGamesComponent} from './games/search-games/search-games.component';
import {FormGameComponent} from './games/shared/form-game/form-game.component';
import {LayoutComponent} from './layout/layout.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    LayoutComponent,
    NewGameComponent,
    GameListComponent,
    EditGameComponent,
    FormGameComponent,
    InfGameComponent,
    SearchGamesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
	MatChipsModule,
	MatCardModule,
	MatGridListModule,
	MatPaginatorModule
  ],

})
export class AdminModule { }
