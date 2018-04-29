import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TagesplanComponent } from './tagesplan/tagesplan.component';
import {PflegekundeComponent} from './pflegekunde/pflegekunde.component';
import {MessengerComponent} from './messenger/messenger.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService} from './services/aws.service';
import { ChatService} from './services/chatbot.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TagesplanComponent,
    PflegekundeComponent,
    MessengerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule
  ],
  providers: [DataService, ChatService,HttpClientModule,InMemoryDataService],
  bootstrap: [AppComponent]
})


export class AppModule {

}
