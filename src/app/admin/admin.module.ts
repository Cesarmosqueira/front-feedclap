import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NewGameComponent } from './games/new-game/new-game.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { EditGameComponent } from './games/edit-game/edit-game.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGameComponent } from './games/shared/form-game/form-game.component';
import { InfGameComponent } from './games/inf-game/inf-game.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NewGameComponent,
    GameListComponent,
    EditGameComponent,
    FormGameComponent,
    InfGameComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],

})
export class AdminModule { }
