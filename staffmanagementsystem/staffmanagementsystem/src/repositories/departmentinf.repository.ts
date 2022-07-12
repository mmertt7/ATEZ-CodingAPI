import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreconnectionDataSource} from '../datasources';
import {Departmentinf, DepartmentinfRelations} from '../models';

export class DepartmentinfRepository extends DefaultCrudRepository<
  Departmentinf,
  typeof Departmentinf.prototype.id,
  DepartmentinfRelations
> {
  constructor(
    @inject('datasources.postgreconnection') dataSource: PostgreconnectionDataSource,
  ) {
    super(Departmentinf, dataSource);
  }
}
