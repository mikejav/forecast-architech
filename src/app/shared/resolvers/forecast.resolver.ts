import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';

import { Forecast } from 'src/app/shared/models/Forecast';
import { ForecastService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root'
})
export class ForecastResolver implements Resolve<Forecast> {

  constructor(
    private _forecastService: ForecastService,
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    if (route.queryParams.cityName) {
      return this._forecastService
        .getForecastForCity(route.queryParams.cityName)
        .pipe(catchError(() => of(null)));
    } else {
      return of(null);
    }
  }
}
