import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Weather } from 'src/app/shared/models/Weather';


@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemperatureChartComponent {

  @Input() weatherList: Weather[];

  get chartData(): ChartDataSets[] {
    return [
      {
        data: this.weatherList
          .filter((weather, index) => index % 4 === 0)
          .map((weather) => weather.main.temp)
      },
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
