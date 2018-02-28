import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActuatorsComponent } from './actuators/actuators.component';

const routes: Routes = [
  { path: 'type/:deviceType', component: ActuatorsComponent },
  { path: 'type', component: ActuatorsComponent },
  { path: 'topology', component: ActuatorsComponent },
 { path: '', redirectTo: '/type', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
