import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { TemperatureChartComponent } from './components/temperature-chart/temperature-chart.component';
import { HumidityChartComponent } from './components/humidity-chart/humidity-chart.component';


@NgModule({
  declarations: [
    HomeComponent,
    WeatherListComponent,
    CityDetailsComponent,
    TemperatureChartComponent,
    HumidityChartComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
})
export class HomeModule { }
