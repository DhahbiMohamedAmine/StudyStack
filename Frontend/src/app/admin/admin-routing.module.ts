import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestProfComponent } from './gest-prof/gest-prof.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"",component:RegistrationComponent},
  {path:"all",component:GestProfComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
