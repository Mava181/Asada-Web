import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { AcercaDe } from './acerca-de/acerca-de';

const routes: Routes = [ { path: 'inicio', 
component: Inicio}, { path: 'acercade', 
component: AcercaDe}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
