import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing-module';
import { Contacto } from './contacto/contacto';
import { MatIcon } from '@angular/material/icon';


@NgModule({
  declarations: [
    Contacto
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    MatIcon
  ]
})
export class ContactoModule { }
