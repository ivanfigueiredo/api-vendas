import { CellProps } from '../domain/entities/cell-entities'

export interface ILoadCellRepo {
  loadCellByCode (code: string): Promise<CellProps>
}
