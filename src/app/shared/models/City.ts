import { Coord } from './Coord';
import { IDeserializable } from 'src/app/shared/interfaces/IDeserializable';

export class City implements IDeserializable {

  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;

  deserialize(input: City) {
    Object.assign(this, input);
    this.coord = new Coord().deserialize(input.coord);

    return this;
  }
}
