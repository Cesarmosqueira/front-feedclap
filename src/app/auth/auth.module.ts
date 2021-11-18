import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import {MaterialModule} from '../material/material.module';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
	MaterialModule,
	HttpClient,
	MatDialogModule
  ]
})
export class AuthModule { }
