import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Consejos } from './consejos/consejos';

const routes: Routes = [ { path: 'consejos', 
component: Consejos}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsejosRoutingModule { }
