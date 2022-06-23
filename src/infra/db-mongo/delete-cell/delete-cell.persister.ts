import { IDeleteOneCell } from './../../../repo/delete-cell.repo'
import Cell from '../../schema/cell.model'

export class DeleteCellPersister implements IDeleteOneCell {
  async deleteOneCell (code: string): Promise<any> {
    const result = await Cell.deleteOne({ code }).exec()

    return result
  }
}
