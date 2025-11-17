import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFound } from './share/page-not-found/page-not-found';

const routes: Routes = [
{ path:'', redirectTo:'/inicio' ,pathMatch:'full'}, 

{ path: '**', component: PageNotFound },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
