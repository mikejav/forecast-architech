import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Forecast } from './../../models/Forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  getForecastForCity(cityName: string): Observable<Forecast> {
    const params = new HttpParams()
      .append('q', cityName)
      .append('units', 'metric')
      .append('appid', environment.openWeatherMapAppId);

    return this._httpClient
      .get<Forecast>(environment.apiEndpoints.openWeatherMap, { params })
      .pipe(
        map(forecast => new Forecast().deserialize(forecast)),
      );
  }
}
