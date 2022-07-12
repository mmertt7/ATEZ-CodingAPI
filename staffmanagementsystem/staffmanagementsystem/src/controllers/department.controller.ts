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
import {Departmentinf} from '../models';
import {DepartmentinfRepository} from '../repositories';

export class DepartmentController {
  constructor(
    @repository(DepartmentinfRepository)
    public departmentinfRepository : DepartmentinfRepository,
  ) {}

  @post('/departmentinfs')
  @response(200, {
    description: 'Departmentinf model instance',
    content: {'application/json': {schema: getModelSchemaRef(Departmentinf)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departmentinf, {
            title: 'NewDepartmentinf',
            exclude: ['id'],
          }),
        },
      },
    })
    departmentinf: Omit<Departmentinf, 'id'>,
  ): Promise<Departmentinf> {
    return this.departmentinfRepository.create(departmentinf);
  }

  @get('/departmentinfs/count')
  @response(200, {
    description: 'Departmentinf model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Departmentinf) where?: Where<Departmentinf>,
  ): Promise<Count> {
    return this.departmentinfRepository.count(where);
  }

  @get('/departmentinfs')
  @response(200, {
    description: 'Array of Departmentinf model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Departmentinf, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Departmentinf) filter?: Filter<Departmentinf>,
  ): Promise<Departmentinf[]> {
    return this.departmentinfRepository.find(filter);
  }

  @patch('/departmentinfs')
  @response(200, {
    description: 'Departmentinf PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departmentinf, {partial: true}),
        },
      },
    })
    departmentinf: Departmentinf,
    @param.where(Departmentinf) where?: Where<Departmentinf>,
  ): Promise<Count> {
    return this.departmentinfRepository.updateAll(departmentinf, where);
  }

  @get('/departmentinfs/{id}')
  @response(200, {
    description: 'Departmentinf model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Departmentinf, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Departmentinf, {exclude: 'where'}) filter?: FilterExcludingWhere<Departmentinf>
  ): Promise<Departmentinf> {
    return this.departmentinfRepository.findById(id, filter);
  }

  @patch('/departmentinfs/{id}')
  @response(204, {
    description: 'Departmentinf PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departmentinf, {partial: true}),
        },
      },
    })
    departmentinf: Departmentinf,
  ): Promise<void> {
    await this.departmentinfRepository.updateById(id, departmentinf);
  }

  @put('/departmentinfs/{id}')
  @response(204, {
    description: 'Departmentinf PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() departmentinf: Departmentinf,
  ): Promise<void> {
    await this.departmentinfRepository.replaceById(id, departmentinf);
  }

  @del('/departmentinfs/{id}')
  @response(204, {
    description: 'Departmentinf DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.departmentinfRepository.deleteById(id);
  }
}
