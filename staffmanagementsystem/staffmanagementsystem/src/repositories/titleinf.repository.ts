import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreconnectionDataSource} from '../datasources';
import {Titleinf, TitleinfRelations} from '../models';

export class TitleinfRepository extends DefaultCrudRepository<
  Titleinf,
  typeof Titleinf.prototype.id,
  TitleinfRelations
> {
  constructor(
    @inject('datasources.postgreconnection') dataSource: PostgreconnectionDataSource,
  ) {
    super(Titleinf, dataSource);
  }
}
