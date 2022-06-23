import { InvalidParamError } from './../../helpers/errors/invalid-param-error'
import { badRequest, Success } from '../../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../../helpers/http'
import { Controller } from '../controller/controller'
import { MissingParamError } from '../../helpers/errors'
import { AddCellUseCase } from '../../domain/use-case/add-cell.use-case/add-cell.use-case'

export class AddCellController implements Controller {
  constructor (
    private readonly addCellUseCase: AddCellUseCase
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['model', 'price', 'brand', 'startDate', 'endDate', 'color', 'code']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const newCell = await this.addCellUseCase.execute(httpRequest.body)

      return Success(newCell)
    } catch (error) {
      return badRequest(new InvalidParamError('UNPROCESSABLE_ENTITY'))
    }
  }
}
