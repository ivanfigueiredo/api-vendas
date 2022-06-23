/* eslint-disable indent */
import { IUpdateCellRepo } from './../../../repo/update-cell.repo'
import { UpdateCellDto } from '../../../domain/use-case/update-cell.use-case/update-cell.dto'
import Cell from '../../schema/cell.model'

export class UpdateCellPersister implements IUpdateCellRepo {
  async updateCellOne (data: UpdateCellDto): Promise<any> {
    const result = await Cell.findOneAndUpdate(
      { code: data.code },
      {
        $set: Object
            .assign(
                data,
                {
                    endDate: data.endDate,
                    startDate: data.startDate,
                    brand: data.brand,
                    color: data.color,
                    price: data.price
                }
            )
      }
    )

    return result
  }
}
