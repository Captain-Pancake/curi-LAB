import { Component } from '@angular/core';
import {Pflegekunde} from './obj/pflegekunde';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'curiLAB';

  pflegekunde1: Pflegekunde = {
      id: 1,
      name: 'müller',
      vorname:'Harald',
      pflegegrad:'1',
      adresse:'weg 1'
    };

    pflegekunde2: Pflegekunde = {
        id: 2,
        name: 'meyer',
        vorname:'li',
        pflegegrad:'1',
          adresse:'weg 2'
      };

      pflegekunde3: Pflegekunde = {
          id: 3,
          name: 'wuff',
          vorname: 'hasso',
          pflegegrad:'1',
            adresse:'weg 3'
        };

    tageskunden:Pflegekunde[] =[this.pflegekunde1,this.pflegekunde2,this.pflegekunde3];
}
