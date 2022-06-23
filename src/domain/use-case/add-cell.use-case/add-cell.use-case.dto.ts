
export enum Color {
  BLACK = 'BLACK',
  WHITE = 'WHITE',
  GOLD = 'GOLD',
  PINK = 'PINK'
}

export interface AddCellUseCaseDto {
  model: string
  price: number
  brand: string
  startDate: Date
  endDate: Date
  color: Color
  code: string
}
