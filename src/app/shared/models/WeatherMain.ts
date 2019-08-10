import { IDeserializable } from 'src/app/shared/interfaces/IDeserializable';

export class WeatherMain implements IDeserializable {

  temp: number;
  tempMin: number;
  tempMax: number;
  pressure: number;
  seaLevel: number;
  grndLevel: number;
  humidity: number;
  tempKf: number;

  deserialize(input: any) {
    this.temp = input.temp;
    this.tempMin = input.temp_min;
    this.tempMax = input.temp_max;
    this.pressure = input.pressure;
    this.seaLevel = input.sea_level;
    this.grndLevel = input.grnd_level;
    this.humidity = input.humidity;
    this.tempKf = input.temp_kf;

    return this;
  }
}
