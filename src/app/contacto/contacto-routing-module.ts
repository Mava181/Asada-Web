import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contacto } from './contacto/contacto';

const routes: Routes = [{ path: 'contacto', 
component: Contacto}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
