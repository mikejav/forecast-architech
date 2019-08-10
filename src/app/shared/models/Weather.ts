import { Clouds } from './Clouds';
import { Wind } from './Wind';
import { WeatherMetadata } from './WeatherMetadata';
import { Snow } from './Snow';
import { Rain } from './Rain';
import { WeatherMain } from './WeatherMain';

export class Weather {

  dt: Date;
  main: WeatherMain;
  weatherMetadataList: WeatherMetadata[];
  clouds?: Clouds;
  wind?: Wind;
  rain?: Rain;
  snow?: Snow;
  dtTxt: Date; // date of calculation

  deserialize(input: any) {
    Object.assign(this, input);

    this.dt = new Date(input.dt);

    this.main = new WeatherMain().deserialize(input.main);

    this.weatherMetadataList = input.weather.map((weatcherMetadata: WeatherMetadata) =>
      new WeatherMetadata().deserialize(weatcherMetadata)
    );

    if (input.clouds) {
      this.clouds = new Clouds().deserialize(input.clouds);
    }

    if (input.wind) {
      this.wind = new Wind().deserialize(input.wind);
    }

    if (input.rain) {
      this.rain = new Rain().deserialize(input.rain);
    }

    if (input.snow) {
      this.snow = new Snow().deserialize(input.snow);
    }

    this.dtTxt = new Date(input.dt_txt);

    return this;
  }
}
