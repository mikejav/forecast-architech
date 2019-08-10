import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Forecast } from 'src/app/shared/models/Forecast';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable, fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  forecast$: Observable<Forecast>;
  forecastForm: FormGroup;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
  ) {
    this.initializeForm();
  }

  private initializeForm() {
    const initCityName = this._activatedRoute.snapshot.queryParams.cityName || '';

    this.forecastForm = this._formBuilder.group({
      cityName: [initCityName],
    });
  }

  ngOnInit() {
    this.initializeForecast$();
    this.initializeFormValueChangesHandler();
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
      .subscribe((val) => {
        const params = {} as Params;

        if (val) {
          params.cityName = val;
        }

        this._router.navigate([], {
          relativeTo: this._activatedRoute,
          queryParams: params,
        });
      });
  }
}
