import { IDeserializable } from 'src/app/shared/interfaces/IDeserializable';

export class Clouds implements IDeserializable {

  all: number; // cloudiness, precentage value

  deserialize(input: any) {
    Object.assign(this, input);

    return this;
  }
}
