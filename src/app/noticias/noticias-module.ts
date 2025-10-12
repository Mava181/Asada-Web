import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing-module';
import { Noticias } from './noticias/noticias';
import { MatCard, MatCardContent } from '@angular/material/card';


@NgModule({
  declarations: [
    Noticias
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    MatCard,
    MatCardContent
  ]
})
export class NoticiasModule { }
