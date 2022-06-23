import { CellProps } from '../../../domain/entities/cell-entities'
import { IAddCellRepo } from '../../../repo/add-cell.repo'
import Cell from '../../schema/cell.model'
import { CellMapper } from '../../mapper/cell.mapper'

export class SaveCellPersister implements IAddCellRepo {
  constructor (
    private readonly cellMapper: CellMapper
  ) {}

  async save (cell: CellProps): Promise<void> {
    const toPersiste = this.cellMapper.toPersistence(cell)
    const cellBuild = new Cell(toPersiste)
    await cellBuild.save()
  }
}
