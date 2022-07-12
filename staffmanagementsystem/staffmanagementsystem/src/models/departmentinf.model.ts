import {Entity, model, property} from '@loopback/repository';

@model()
export class Departmentinf extends Entity {
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
  departmentname: string;

  @property({
    type: 'string',
    required: true,
  })
  departmentmanager: string;

  @property({
    type: 'string',
    required: true,
  })
  departmentlocation: string;


  constructor(data?: Partial<Departmentinf>) {
    super(data);
  }
}

export interface DepartmentinfRelations {
  // describe navigational properties here
}

export type DepartmentinfWithRelations = Departmentinf & DepartmentinfRelations;
