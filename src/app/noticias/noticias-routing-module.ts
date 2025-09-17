import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Noticias } from './noticias/noticias';

const routes: Routes = [{ path: 'noticias', 
component: Noticias}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
