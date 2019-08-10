import { IDeserializable } from 'src/app/shared/interfaces/IDeserializable';

export class Wind implements IDeserializable {

  speed: number;
  deg: number;

  deserialize(input: any) {
    Object.assign(this, input);

    return this;
  }
}
