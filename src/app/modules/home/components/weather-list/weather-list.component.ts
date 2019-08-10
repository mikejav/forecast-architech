import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Weather } from 'src/app/shared/models/Weather';
import { environment } from 'src/environments/environment';

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

  getImgUrlForIcon(iconName: string): string {
    return `${environment.openWeatherMapIconsUrl}/${iconName}@2x.png`;
  }

}
