import { Component } from '@angular/core';
import {Pflegekunde} from '../obj/pflegekunde';
import { FormsModule } from '@angular/forms';
import {DataService} from '../services/aws.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import {Item} from '../obj/protocoll';
import {Answer} from '../obj/Answer';

@Component({
  selector: 'app-root',
  templateUrl: './pflegekunde.component.html',
  styleUrls: ['./pflegekunde.component.css']
})
export class PflegekundeComponent {

    kunde: Pflegekunde;
    protocolls: Item;
    answer:Answer;

    constructor(
      private route: ActivatedRoute,
      private dataService: DataService,
      private location: Location
    ) {}

 ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
     this.getKunde(id);
     this.getProtocoll();
   };


   getProtocoll() {
     this.dataService.getProtocolls().subscribe(
        data =>  this.protocolls=data.Item);
   }

   getKunde(id) {
  this.kunde  = this.dataService.getKunde(id);
  }
 
}
