import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/shared/models/Forecast';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  forecast$: Observable<Forecast>;

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.initializeForecast$();
  }

  private initializeForecast$() {
    this.forecast$ = this._activatedRoute.data.pipe(
      map(data => data.forecast as Forecast)
    );
  }
}
