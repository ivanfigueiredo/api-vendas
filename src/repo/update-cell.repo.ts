import { UpdateCellDto } from '../domain/use-case/update-cell.use-case/update-cell.dto'

export interface IUpdateCellRepo {
  updateCellOne (data: UpdateCellDto): Promise<any>
}
