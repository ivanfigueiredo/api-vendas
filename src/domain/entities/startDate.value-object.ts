import { InvalidParamError } from './../../helpers/errors/invalid-param-error'
import { badRequest, Success } from './../../helpers/http-helper'
/* eslint-disable no-useless-constructor */

export class StartDate {
  private static date = new Date('2018-12-31')
  private constructor (
    private readonly endDate: Date
  ) {}

  get value (): Date {
    return this.endDate
  }

  private static isValid (value: Date): boolean {
    return value > this.date
  }

  public static create (value: Date) {
    const isValidValue = StartDate.isValid(value)

    if (!isValidValue) {
      return badRequest(new InvalidParamError('startDate'))
    }

    return Success(new StartDate(value))
  }
}
