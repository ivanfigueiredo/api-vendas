import { InvalidParamError } from './../../helpers/errors/invalid-param-error'
import { badRequest, Success } from './../../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../../helpers/http'
import { Controller } from './../controller/controller'
import { UpdateCellUseCase } from '../../domain/use-case/update-cell.use-case/update-cell.use-case'

export class UpdateCellController implements Controller {
  constructor (
    private readonly updateCellUseCase: UpdateCellUseCase
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const cell = await this.updateCellUseCase.execute(httpRequest.body)

    if (!cell) {
      return badRequest(new InvalidParamError('CODE_NOT_FOUND'))
    }

    return Success(cell)
  }
}
