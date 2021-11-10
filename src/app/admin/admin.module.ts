import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NewGameComponent } from './games/new-game/new-game.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { EditGameComponent } from './games/edit-game/edit-game.component';
import { FormGameComponent } from './shared/form-game/form-game.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    NewGameComponent,
    GameListComponent,
    EditGameComponent,
    FormGameComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
