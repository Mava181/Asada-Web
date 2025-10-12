import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFound } from './page-not-found/page-not-found';
import { Hero } from './hero/hero';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing-module';



@NgModule({
  declarations: [
    PageNotFound,
    Hero
  ],
  imports: [
    CommonModule,
    MatButtonModule,
     RouterModule,          
    AppRoutingModule
  ],
    exports: [Hero]
})
export class ShareModule { }
