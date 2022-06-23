import { IUpdateCellRepo } from './../../../repo/update-cell.repo'
import { badRequest } from './../../../helpers/http-helper'
import { HttpResponse } from '../../../helpers/http'
import { Success } from '../../../helpers/http-helper'
import { InvalidParamError } from '../../../helpers/errors'
import { UpdateCellDto } from './update-cell.dto'

export class UpdateCellUseCase {
  constructor (
    private readonly updateCellRepo: IUpdateCellRepo
  ) {}

  async execute (data: UpdateCellDto): Promise<HttpResponse> {
    const result = await this.updateCellRepo.updateCellOne(data)

    if (!result) {
      return badRequest(new InvalidParamError('CODE_NOT_FOUND'))
    }
    return Success('ok')
  }
}
