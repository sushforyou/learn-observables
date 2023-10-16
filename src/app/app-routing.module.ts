import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromisesComponent } from './promises/promises.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  {path:'promise', component:PromisesComponent},
  {path:'observables', component:ObservablesComponent},
  {path:'**',redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
