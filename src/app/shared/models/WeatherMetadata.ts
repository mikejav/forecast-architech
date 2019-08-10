import { IDeserializable } from 'src/app/shared/interfaces/IDeserializable';

export class WeatherMetadata implements IDeserializable {

  id: number;
  main: string;
  description: string;
  icon: string;

  deserialize(input: any) {
    Object.assign(this, input);

    return this;
  }
}
