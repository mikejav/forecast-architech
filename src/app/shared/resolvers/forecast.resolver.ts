import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Forecast } from 'src/app/shared/models/Forecast';
import { ForecastService } from 'src/app/shared/services';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastResolver implements Resolve<Forecast> {

  constructor(
    private _forecastService: ForecastService,
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    if (route.queryParams.cityName) {
      return this._forecastService.getForecastForCity(route.queryParams.cityName);
    } else {
      return of(null);
    }
  }
}
