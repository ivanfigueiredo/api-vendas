import { badRequest } from './../../../helpers/http-helper'
import { HttpResponse } from '../../../helpers/http'
import { Success } from '../../../helpers/http-helper'
import { IAddCellRepo } from '../../../repo/add-cell.repo'
import { CellEntities } from '../../entities/cell-entities'
import { Model } from '../../entities/model.object-value'
import { AddCellUseCaseDto } from './add-cell.use-case.dto'
import { InvalidParamError, ServerError } from '../../../helpers/errors'
import { Brand } from '../../entities/brand.object-value'
import { StartDate } from '../../entities/startDate.value-object'
import { EndDate } from '../../entities/endDate.object-value'

export class AddCellUseCase {
  constructor (
    private readonly addCellRepository: IAddCellRepo
  ) {}

  async execute (data: AddCellUseCaseDto): Promise<HttpResponse> {
    const result = CellEntities.create({
      model: Model.create(data.model).body,
      brand: Brand.create(data.brand).body,
      startDate: StartDate.create(new Date(data.startDate)).body,
      endDate: EndDate.create(new Date(data.endDate)).body,
      color: data.color
    })
    if (result.statusCode === 400) {
      return badRequest(new InvalidParamError('UNPROCESSABLE_ENTITY'))
    }

    const newCell = await this.addCellRepository
      .save(result.body)
    return Success('')
  }
}
