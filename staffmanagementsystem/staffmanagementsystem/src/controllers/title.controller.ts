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
import {Titleinf} from '../models';
import {TitleinfRepository} from '../repositories';

export class TitleController {
  constructor(
    @repository(TitleinfRepository)
    public titleinfRepository : TitleinfRepository,
  ) {}

  @post('/titleinfs')
  @response(200, {
    description: 'Titleinf model instance',
    content: {'application/json': {schema: getModelSchemaRef(Titleinf)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Titleinf, {
            title: 'NewTitleinf',
            exclude: ['id'],
          }),
        },
      },
    })
    titleinf: Omit<Titleinf, 'id'>,
  ): Promise<Titleinf> {
    return this.titleinfRepository.create(titleinf);
  }

  @get('/titleinfs/count')
  @response(200, {
    description: 'Titleinf model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Titleinf) where?: Where<Titleinf>,
  ): Promise<Count> {
    return this.titleinfRepository.count(where);
  }

  @get('/titleinfs')
  @response(200, {
    description: 'Array of Titleinf model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Titleinf, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Titleinf) filter?: Filter<Titleinf>,
  ): Promise<Titleinf[]> {
    return this.titleinfRepository.find(filter);
  }

  @patch('/titleinfs')
  @response(200, {
    description: 'Titleinf PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Titleinf, {partial: true}),
        },
      },
    })
    titleinf: Titleinf,
    @param.where(Titleinf) where?: Where<Titleinf>,
  ): Promise<Count> {
    return this.titleinfRepository.updateAll(titleinf, where);
  }

  @get('/titleinfs/{id}')
  @response(200, {
    description: 'Titleinf model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Titleinf, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Titleinf, {exclude: 'where'}) filter?: FilterExcludingWhere<Titleinf>
  ): Promise<Titleinf> {
    return this.titleinfRepository.findById(id, filter);
  }

  @patch('/titleinfs/{id}')
  @response(204, {
    description: 'Titleinf PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Titleinf, {partial: true}),
        },
      },
    })
    titleinf: Titleinf,
  ): Promise<void> {
    await this.titleinfRepository.updateById(id, titleinf);
  }

  @put('/titleinfs/{id}')
  @response(204, {
    description: 'Titleinf PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() titleinf: Titleinf,
  ): Promise<void> {
    await this.titleinfRepository.replaceById(id, titleinf);
  }

  @del('/titleinfs/{id}')
  @response(204, {
    description: 'Titleinf DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.titleinfRepository.deleteById(id);
  }
}
