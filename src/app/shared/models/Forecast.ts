import { IDeserializable } from 'src/app/shared/interfaces/IDeserializable';
import { City } from './City';
import { Weather } from './Weather';

export class Forecast implements IDeserializable {

  city: City;
  weatherList: Weather[];

  deserialize(value: any): this {
    this.city = new City().deserialize(value.city);
    this.weatherList = value.list.map(forecast => new Weather().deserialize(forecast));

    return this;
  }
}
