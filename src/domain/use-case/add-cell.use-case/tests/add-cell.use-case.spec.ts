import { MockAddCellRepository } from '../../../../infra/db-mongo/mock/add-cell.mock'
import { IAddCellRepo } from '../../../../repo/add-cell.repo'
import { AddCellUseCase } from '../add-cell.use-case'
import { AddCellUseCaseDto, Color } from '../add-cell.use-case.dto'

describe('add-cell.use-case', () => {
  let useCase: AddCellUseCase
  let addCellRepo: IAddCellRepo
  let dto: AddCellUseCaseDto

  beforeAll(() => {
    dto = {
      code: '11012025',
      model: 'AHFDJHERERH',
      brand: 'brand',
      startDate: new Date('2022/01/25'),
      endDate: new Date(),
      price: 333,
      color: 'BLACK' as Color
    }
    addCellRepo = MockAddCellRepository()
    useCase = new AddCellUseCase(addCellRepo)
  })
  it('should br defined', async () => {
    expect(useCase).toBeDefined()
  })

  it('should add cell with success', async () => {
    const result = await useCase.execute(dto)
    expect(result.body).toBeTruthy()
  })

  it('should be able to call save with correct values', async () => {
    const spySave = jest.spyOn(addCellRepo, 'save')
    const result = await useCase.execute(dto)
    expect(result.body).toBeTruthy()
    expect(spySave).toHaveBeenCalled()
  })
})
