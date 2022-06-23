import { ILoadCellRepo } from './../../../repo/load-cell.repo'
import Cell from '../../schema/cell.model'

export class LoadCellByCodePersister implements ILoadCellRepo {
  async loadCellByCode (code: string) {
    const cellResult = await Cell.findOne({ code: code.replace(/\s/g, '') })
    return cellResult
  }
}
