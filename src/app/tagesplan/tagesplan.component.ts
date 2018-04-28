import { Component } from '@angular/core';
import {Pflegekunde} from '../obj/pflegekunde';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@Component({
  selector: 'app-root',
  templateUrl: './tagesplan.component.html',
  styleUrls: ['./tagesplan.component.css']
})
export class TagesplanComponent {

  selectedkunde: Pflegekunde;

onSelect(kunde: Pflegekunde): void {
  this.selectedkunde = kunde;
}

  pflegekunde1: Pflegekunde = {
      id: 1,
      name: 'Müller',
      vorname:'Harald',
      zeit:'7:00',
      adresse:'Sonderweg 1',
      dauer:'1,5'
    };

    pflegekunde2: Pflegekunde = {
        id: 2,
        name: 'Lillifee',
        vorname:'Sabine',
        zeit:'10:00',
        adresse:'Volksstr.23',
            dauer:'3,5'
      };

      pflegekunde3: Pflegekunde = {
          id: 3,
          name: 'Wuff',
          vorname: 'Hasso',
          zeit:'15:00',
          adresse:'Hundstr. 3',
          dauer:'6,5'
        };

    tageskunden:Pflegekunde[] =[this.pflegekunde1,this.pflegekunde2,this.pflegekunde3];
}
