import { Component } from '@angular/core';
import {Pflegekunde} from '../obj/pflegekunde';
import { FormsModule } from '@angular/forms';
import {ChatService} from '../services/chatbot.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OnInit } from '@angular/core';
import {Accesstoken}from '../services/accesstoken';
import { Observable } from 'rxjs/Observable';




@Component({
  selector: 'app-root',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  access:Accesstoken={
    accessToken:'224234',
    expiration:'23234'
  };


    constructor(private chatService: ChatService) {}


ngOnInit(): void {
  this.getAuth();
}

getAuth(): void {
  this.chatService.getAuth()
    .subscribe(access => this.access = access);
}


}
