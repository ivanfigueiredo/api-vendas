import { InvalidParamError } from './../../helpers/errors/invalid-param-error'
import { badRequest, Success } from './../../helpers/http-helper'
/* eslint-disable no-useless-constructor */

export class Model {
  private constructor (
    private readonly model: string
  ) {}

  get value (): string {
    return this.model
  }

  private static isValid (value: string): boolean {
    return value.length > 2 && value.length < 255
  }

  public static create (value: string) {
    const isValidValue = Model.isValid(value)

    if (!isValidValue) {
      return badRequest(new InvalidParamError('model'))
    }

    return Success(new Model(value))
  }
}
