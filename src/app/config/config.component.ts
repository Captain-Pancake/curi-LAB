import { Component } from '@angular/core';
import {Pflegekunde} from '../obj/pflegekunde';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from './config.service';


export class ConfigComponent {

  constructor(private configService: ConfigService) {}

}
