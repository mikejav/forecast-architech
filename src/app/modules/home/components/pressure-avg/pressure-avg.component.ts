import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Weather } from 'src/app/shared/models/Weather';
import * as _ from 'lodash';

@Component({
  selector: 'app-pressure-avg',
  templateUrl: './pressure-avg.component.html',
  styleUrls: ['./pressure-avg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PressureAvgComponent {

  @Input() weatherList: Weather[];

  get pressureAvg() {
    const pressureAvg = _.meanBy(this.weatherList, weather => weather.main.pressure);
    const roundedPressureAvg = _.round(pressureAvg, 2);

    return roundedPressureAvg;
  }
}
