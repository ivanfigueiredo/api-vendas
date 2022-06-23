/* eslint-disable no-useless-constructor */
import { Success } from './../../helpers/http-helper'
import { Brand } from './brand.object-value'
import { Color } from './color.enum'
import { Model } from './model.object-value'
import { EndDate } from './endDate.object-value'
import { StartDate } from './startDate.value-object'
import { HttpResponse } from '../../helpers/http'

export interface CellProps {
  code: string
  model: Model
  color: Color
  brand: Brand
  endDate: EndDate
  startDate: StartDate
}

export class CellEntities {
  constructor (
    private readonly props: CellProps
  ) {}

  get model (): Model {
    return this.props.model
  }

  get code (): string {
    return this.props.code
  }

  get color (): Color {
    return this.props.color
  }

  get brand (): Brand {
    return this.props.brand
  }

  get endDate (): EndDate {
    return this.props.endDate
  }

  get startDate (): StartDate {
    return this.props.startDate
  }

  private static checkErrorProps (props: CellProps): boolean {
    if (Model.create(props.model.value).statusCode === 400) {
      return true
    }
    if (Brand.create(props.brand.value).statusCode === 400) {
      return true
    }
    if (EndDate.create(props.endDate.value).statusCode === 400) {
      return true
    }
    if (StartDate.create(props.startDate.value).statusCode === 400) {
      return true
    }
  }

  public static create (props: CellProps): HttpResponse {
    const cellEntities = new CellEntities(props)
    const error = this.checkErrorProps(props)
    if (error) {
      return {
        body: '',
        statusCode: 400
      }
    }
    return Success(cellEntities)
  }
}
