import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Servicios } from './servicios/servicios';

const routes: Routes = [{ path: 'servicios', 
component: Servicios}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
