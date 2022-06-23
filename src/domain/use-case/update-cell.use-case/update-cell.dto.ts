import { Color } from '../add-cell.use-case/add-cell.use-case.dto'

export interface UpdateCellDto {
    model?: string
    price?: number
    brand?: string
    startDate?: Date
    endDate?: Date
    color?: Color
    code: string
}
