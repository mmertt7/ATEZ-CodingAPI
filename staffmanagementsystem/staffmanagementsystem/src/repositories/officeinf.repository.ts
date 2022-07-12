import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreconnectionDataSource} from '../datasources';
import {Officeinf, OfficeinfRelations} from '../models';

export class OfficeinfRepository extends DefaultCrudRepository<
  Officeinf,
  typeof Officeinf.prototype.id,
  OfficeinfRelations
> {
  constructor(
    @inject('datasources.postgreconnection') dataSource: PostgreconnectionDataSource,
  ) {
    super(Officeinf, dataSource);
  }
}
