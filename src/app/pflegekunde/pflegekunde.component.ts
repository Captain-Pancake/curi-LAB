import { Component } from '@angular/core';
import {Pflegekunde} from '../obj/pflegekunde';
import { FormsModule } from '@angular/forms';
import {DataService} from '../services/aws.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './pflegekunde.component.html',
  styleUrls: ['./pflegekunde.component.css']
})
export class PflegekundeComponent {
    kunde: Pflegekunde;

    constructor(
      private route: ActivatedRoute,
      private dataService: DataService,
      private location: Location
    ) {}

 ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
     this.getKunde(id);
   };

   getKunde(id) {
  this.kunde  = this.dataService.getKunde(id);


      //,
  //     err => console.error(err),
  //     () => console.log('done loading Kunde')
  //  );
  }

}
