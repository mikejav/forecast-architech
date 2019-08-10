import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { City } from 'src/app/shared/models/City';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityDetailsComponent implements OnInit {

  @Input() city: City;

  constructor() { }

  ngOnInit() {
  }

}
