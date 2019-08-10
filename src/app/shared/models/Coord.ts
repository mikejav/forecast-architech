import { IDeserializable } from 'src/app/shared/interfaces/IDeserializable';

export class Coord implements IDeserializable {

  lat: number;
  lon: number;

  deserialize(input: any) {
    Object.assign(this, input);

    return this;
  }
}
