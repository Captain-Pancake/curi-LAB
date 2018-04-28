import { Component } from '@angular/core';
import {Pflegekunde} from '../obj/pflegekunde';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'curiLAB';

  pflegekunde: Pflegekunde = {
      id: 1,
      name: 'müller',
      vorname:'Harald',
      pflegegrad:'1',
    };
}
