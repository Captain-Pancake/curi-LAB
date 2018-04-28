import { Component } from '@angular/core';
import {Pflegekunde} from '../obj/pflegekunde';
import { FormsModule } from '@angular/forms';
import {DataService} from '../services/aws.service';
@Component({
  selector: 'app-root',
  templateUrl: './pflegekunde.component.html',
  styleUrls: ['./pflegekunde.component.css']
})
export class PflegekundeComponent {


    kunde: Pflegekunde;

 constructor(private _dataService: DataService) { };

 ngOnInit() {
     this.getKunde();
   };

   getKunde() {
     console.log('hy');
    this._dataService.getKunde().subscribe(
      data => { this.kunde = data[0]},
       err => console.error(err),
       () => console.log('done loading Kunde')
    );
  }

}
