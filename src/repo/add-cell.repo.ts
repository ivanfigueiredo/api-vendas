import { CellProps } from '../domain/entities/cell-entities'

export interface IAddCellRepo {
  save(cell: CellProps): Promise<void>
}
