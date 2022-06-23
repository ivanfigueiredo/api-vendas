import { InvalidParamError } from '../../helpers/errors/invalid-param-error'
import { badRequest, serverError, Success } from '../../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../../helpers/http'
import { Controller } from '../controller/controller'
import { DeleteCellUseCase } from '../../domain/use-case/delete-cell/delete-cell.use-case'

export class DeleteCellController implements Controller {
  constructor (
    private readonly deleteCellUseCase: DeleteCellUseCase
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const cell = await this.deleteCellUseCase.execute(httpRequest.body)

      if (!cell) {
        return badRequest(new InvalidParamError('CODE_NOT_FOUND'))
      }

      return Success(cell)
    } catch (error) {
      return serverError()
    }
  }
}
