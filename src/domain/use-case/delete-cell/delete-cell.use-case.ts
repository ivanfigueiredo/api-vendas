import { IDeleteOneCell } from './../../../repo/delete-cell.repo'
import { HttpResponse } from '../../../helpers/http'
import { Success, badRequest } from '../../../helpers/http-helper'
import { InvalidParamError } from '../../../helpers/errors'
import { LoadCellDto } from './delete-cell.dto'

export class DeleteCellUseCase {
  constructor (
    private readonly deleteOneCell: IDeleteOneCell
  ) {}

  async execute (data: LoadCellDto): Promise<HttpResponse> {
    const cell = await this.deleteOneCell.deleteOneCell(data.code)

    if (!cell) {
      return badRequest(new InvalidParamError('CODE_NOT_FOUND'))
    }

    return Success(cell)
  }
}
