/* eslint-disable no-useless-constructor */
import { InvalidParamError } from './../../helpers/errors/invalid-param-error'
import { badRequest, Success } from './../../helpers/http-helper'

export class Brand {
  private constructor (
    private readonly brand: string
  ) {}

  get value (): string {
    return this.brand
  }

  private static isValid (value: string): boolean {
    return value.length > 2 && value.length < 255
  }

  public static create (value: string) {
    const isValidValue = Brand.isValid(value)

    if (!isValidValue) {
      return badRequest(new InvalidParamError('brand'))
    }

    return Success(new Brand(value))
  }
}
