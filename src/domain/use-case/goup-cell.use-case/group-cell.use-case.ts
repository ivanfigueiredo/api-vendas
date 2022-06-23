import { badRequest } from './../../../helpers/http-helper'
import { HttpResponse } from '../../../helpers/http'
import { Success } from '../../../helpers/http-helper'
import { InvalidParamError } from '../../../helpers/errors'
import { IGroupCellsRepo } from '../../../repo/group-cell.repo'

export class GroupCellsUseCase {
  constructor (
    private readonly groupCellsRepo: IGroupCellsRepo
  ) {}

  async execute (): Promise<HttpResponse> {
    const cells = await this.groupCellsRepo.loadGroupCells()

    if (!cells) {
      return badRequest(new InvalidParamError('CODE_NOT_FOUND'))
    }

    return Success(cells)
  }
}
