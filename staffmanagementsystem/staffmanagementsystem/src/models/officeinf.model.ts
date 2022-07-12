import {Entity, model, property} from '@loopback/repository';

@model()
export class Officeinf extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  locationname: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'number',
    required: true,
  })
  zipcode: number;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;


  constructor(data?: Partial<Officeinf>) {
    super(data);
  }
}

export interface OfficeinfRelations {
  // describe navigational properties here
}

export type OfficeinfWithRelations = Officeinf & OfficeinfRelations;
