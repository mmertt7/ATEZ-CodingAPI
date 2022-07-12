import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Officeinf} from '../models';
import {OfficeinfRepository} from '../repositories';

export class OfficeController {
  constructor(
    @repository(OfficeinfRepository)
    public officeinfRepository : OfficeinfRepository,
  ) {}

  @post('/officeinfs')
  @response(200, {
    description: 'Officeinf model instance',
    content: {'application/json': {schema: getModelSchemaRef(Officeinf)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Officeinf, {
            title: 'NewOfficeinf',
            exclude: ['id'],
          }),
        },
      },
    })
    officeinf: Omit<Officeinf, 'id'>,
  ): Promise<Officeinf> {
    return this.officeinfRepository.create(officeinf);
  }

  @get('/officeinfs/count')
  @response(200, {
    description: 'Officeinf model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Officeinf) where?: Where<Officeinf>,
  ): Promise<Count> {
    return this.officeinfRepository.count(where);
  }

  @get('/officeinfs')
  @response(200, {
    description: 'Array of Officeinf model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Officeinf, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Officeinf) filter?: Filter<Officeinf>,
  ): Promise<Officeinf[]> {
    return this.officeinfRepository.find(filter);
  }

  @patch('/officeinfs')
  @response(200, {
    description: 'Officeinf PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Officeinf, {partial: true}),
        },
      },
    })
    officeinf: Officeinf,
    @param.where(Officeinf) where?: Where<Officeinf>,
  ): Promise<Count> {
    return this.officeinfRepository.updateAll(officeinf, where);
  }

  @get('/officeinfs/{id}')
  @response(200, {
    description: 'Officeinf model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Officeinf, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Officeinf, {exclude: 'where'}) filter?: FilterExcludingWhere<Officeinf>
  ): Promise<Officeinf> {
    return this.officeinfRepository.findById(id, filter);
  }

  @patch('/officeinfs/{id}')
  @response(204, {
    description: 'Officeinf PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Officeinf, {partial: true}),
        },
      },
    })
    officeinf: Officeinf,
  ): Promise<void> {
    await this.officeinfRepository.updateById(id, officeinf);
  }

  @put('/officeinfs/{id}')
  @response(204, {
    description: 'Officeinf PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() officeinf: Officeinf,
  ): Promise<void> {
    await this.officeinfRepository.replaceById(id, officeinf);
  }

  @del('/officeinfs/{id}')
  @response(204, {
    description: 'Officeinf DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.officeinfRepository.deleteById(id);
  }
}
