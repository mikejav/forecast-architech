import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Weather } from 'src/app/shared/models/Weather';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherListComponent implements OnInit {

  @Input() weatherList: Weather[];

  constructor() { }

  ngOnInit() {
  }

}
