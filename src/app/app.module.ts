import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TagesplanComponent }  from './tagesplan/tagesplan.component';
import {PflegekundeComponent} from './pflegekunde/pflegekunde.component';
import { AppRoutingModule }     from './app-routing.module';
import { DataService} from './services/aws.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TagesplanComponent,
    PflegekundeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})


export class AppModule {

}
