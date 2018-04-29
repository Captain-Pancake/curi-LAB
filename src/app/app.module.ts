import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TagesplanComponent } from './tagesplan/tagesplan.component';
import {PflegekundeComponent} from './pflegekunde/pflegekunde.component';
import {MessengerComponent} from './messenger/messenger.component';
import { KarteiComponent} from './kartei/kartei.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService} from './services/aws.service';
import { ChatService} from './services/chatbot.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TagesplanComponent,
    PflegekundeComponent,
    MessengerComponent,
    KarteiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService, ChatService,HttpClientModule],
  bootstrap: [AppComponent]
})


export class AppModule {

}
