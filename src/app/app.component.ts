import { Component } from '@angular/core';
// import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    this.configureLibs();
  }

  configureLibs() {
    const moment = require('moment');
    moment.defaultFormat = 'YYYY-MM-DD HH:mm';
  }
}
