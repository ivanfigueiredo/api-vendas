import { badRequest } from './../../../helpers/http-helper'
import { HttpResponse } from '../../../helpers/http'
import { Success } from '../../../helpers/http-helper'
import { InvalidParamError } from '../../../helpers/errors'
import { ILoadCellRepo } from '../../../repo/load-cell.repo'
import { LoadCellDto } from './load-cell.dto'

export class LoadCellUseCase {
  constructor (
    private readonly loadCellRepo: ILoadCellRepo
  ) {}

  async execute (data: LoadCellDto): Promise<HttpResponse> {
    const cell = await this.loadCellRepo.loadCellByCode(data.code)

    if (!cell) {
      return badRequest(new InvalidParamError('CODE_NOT_FOUND'))
    }

    return Success('')
  }
}
