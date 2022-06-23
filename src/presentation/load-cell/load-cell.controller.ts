import { InvalidParamError } from './../../helpers/errors/invalid-param-error'
import { badRequest, Success } from './../../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../../helpers/http'
import { Controller } from './../controller/controller'
import { LoadCellUseCase } from '../../domain/use-case/load-cell/load-cell.use-case'

export class LoadCellController implements Controller {
  constructor (
    private readonly loadCellUseCase: LoadCellUseCase
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const cell = await this.loadCellUseCase.execute(httpRequest.body)

    if (!cell) {
      return badRequest(new InvalidParamError('CODE_NOT_FOUND'))
    }

    return Success(cell)
  }
}
