import { IAddCellRepo } from '../../../repo/add-cell.repo'

export const MockAddCellRepository = (): IAddCellRepo => ({
  save: jest.fn()
})
