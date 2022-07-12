import {Entity, model, property} from '@loopback/repository';

@model()
export class Titleinf extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  startdate: string;

  @property({
    type: 'date',
    required: true,
  })
  enddate: string;

  @property({
    type: 'string',
    required: true,
  })
  titlename: string;

  @property({
    type: 'string',
    required: true,
  })
  departmentt: string;


  constructor(data?: Partial<Titleinf>) {
    super(data);
  }
}

export interface TitleinfRelations {
  // describe navigational properties here
}

export type TitleinfWithRelations = Titleinf & TitleinfRelations;
