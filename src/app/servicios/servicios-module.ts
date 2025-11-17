import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing-module';
import { Servicios } from './servicios/servicios';
import { MatIcon } from '@angular/material/icon';


@NgModule({
  declarations: [
    Servicios
  ],
  imports: [
    CommonModule,
    MatIcon,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
