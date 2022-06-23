import { CellProps } from '../../domain/entities/cell-entities'

export class CellMapper {
  toPersistence (target: CellProps) {
    return {
      model: target.model.value,
      brand: target.brand.value,
      endDate: target.endDate.value,
      startDate: target.startDate.value,
      color: target.color
    }
  }
}
