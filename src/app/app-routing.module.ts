import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { TagesplanComponent }  from './tagesplan/tagesplan.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PflegekundeComponent} from "./pflegekunde/pflegekunde.component"


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PflegekundeComponent },
  { path: 'tagesplan', component: TagesplanComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
