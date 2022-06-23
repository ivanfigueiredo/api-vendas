import { serverError, Success } from '../../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../../helpers/http'
import { Controller } from '../controller/controller'
import { AddCellUseCase } from '../../domain/use-case/add-cell.use-case/add-cell.use-case'
import { GroupCellsUseCase } from '../../domain/use-case/goup-cell.use-case/group-cell.use-case'

export class GroupCellsController implements Controller {
  constructor (
    private readonly groupCellUseCase: GroupCellsUseCase
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const cells = await this.groupCellUseCase.execute()

      return Success(cells)
    } catch (error) {
      return serverError()
    }
  }
}
