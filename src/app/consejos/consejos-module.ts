import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsejosRoutingModule } from './consejos-routing-module';
import { Consejos } from './consejos/consejos';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';


@NgModule({
  declarations: [
    Consejos
  ],
  imports: [
    CommonModule,
    ConsejosRoutingModule,
    MatCard,
    MatCardContent,
    MatIcon
  ]
})
export class ConsejosModule { }
