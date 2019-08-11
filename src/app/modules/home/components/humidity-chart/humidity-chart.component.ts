import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Weather } from 'src/app/shared/models/Weather';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-humidity-chart',
  templateUrl: './humidity-chart.component.html',
  styleUrls: ['./humidity-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HumidityChartComponent {

  @Input() weatherList: Weather[];

  get chartData(): ChartDataSets[] {
    return [
      { data: this.weatherList.map((weather) => weather.main.humidity) },
    ];
  }

  get chartLabels(): Label[] {
    return this.weatherList
      .filter((weather, index) => index % 4 === 0)
      .map((weather) => weather.dtTxt.format('ddd h:mm a'));
  }

  chartOptions: ChartOptions = {
    responsive: true,
  };

  chartColors: Color[] = [
    {
      backgroundColor: '#4e73df10',
      borderColor: '#4e73df',
      pointBackgroundColor: '#4e73df',
    }
  ];
}
