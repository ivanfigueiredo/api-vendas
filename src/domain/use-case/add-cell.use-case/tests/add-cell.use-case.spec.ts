import { MockAddCellRepository } from '../../../../infra/db-mongo/mock/add-cell.mock'
import { IAddCellRepo } from '../../../../repo/add-cell.repo'
import { AddCellUseCase } from '../add-cell.use-case'
import { Color } from '../add-cell.use-case.dto'

describe('add-cell.use-case', () => {
  let useCase: AddCellUseCase
  let addCellRepo: IAddCellRepo

  beforeAll(() => {
    addCellRepo = MockAddCellRepository()
    useCase = new AddCellUseCase(addCellRepo)
  })
  it('should br defined', async () => {
    expect(useCase).toBeDefined()
  })
})
