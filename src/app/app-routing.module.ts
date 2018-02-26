import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActuatorsComponent } from './actuators/actuators.component';

const routes: Routes = [
  { path: '', redirectTo: '/type', pathMatch: 'full' },
  { path: 'type', component: ActuatorsComponent },
  { path: 'topology', component: ActuatorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
