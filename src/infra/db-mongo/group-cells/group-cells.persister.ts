import { IGroupCellsRepo } from './../../../repo/group-cell.repo'
import Cell from '../../schema/cell.model'

export class GroupCellsPersister implements IGroupCellsRepo {
  async loadGroupCells (): Promise<any[]> {
    return await Cell.find({})
  }
}
