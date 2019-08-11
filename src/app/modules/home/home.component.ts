import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/shared/models/Forecast';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  forecast$: Observable<Forecast>;
  forecastForm: FormGroup;
  isLoading = false;

  get forecastNotFound() {
    return !!this._activatedRoute.snapshot.queryParams.cityName;
  }

  get forecastFormCityName() {
    return this.forecastForm.controls.cityName;
  }

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
  ) { }

  public get queryParamsMap$() {
    return this._activatedRoute.queryParamMap;
  }

  ngOnInit() {
    this.initializeForm();
    this.initializeForecast$();
    this.initializeFormValueChangesHandler();
  }

  private initializeForm() {
    const initCityName = this._activatedRoute.snapshot.queryParams.cityName || '';

    this.forecastForm = this._formBuilder.group({
      cityName: [initCityName],
    });
  }

  private initializeForecast$() {
    this.forecast$ = this._activatedRoute.data.pipe(
      map(data => data.forecast as Forecast)
    );
  }

  private initializeFormValueChangesHandler() {
    this.forecastForm.valueChanges
      .pipe(
        map(values => values.cityName),
        debounceTime(500),
        distinctUntilChanged(),
      )
      .subscribe(this.onForecastFormValueChangesHandler);
  }

  private onForecastFormValueChangesHandler = (val) => {
    const params = {} as Params;

    if (val) {
      params.cityName = val;
    }

    this.isLoading = true;
    this._router.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams: params,
    }).then(() => {
      this.isLoading = false;
    });
  }
}
