import { CellProps } from '../domain/entities/cell-entities'

export interface IUpdateCellRepo {
  updateCellOne (code: string): Promise<any>
}
