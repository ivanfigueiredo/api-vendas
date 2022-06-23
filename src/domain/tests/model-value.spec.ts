/* eslint-disable prefer-const */
import { InvalidParamError } from './../../helpers/errors/invalid-param-error'
import { Model } from '../entities/model.object-value'
import { text } from './mock'

describe('model-value.value-object', () => {
  it('should stop creating if mark is less than 2', () => {
    const brand = Model.create('1')
    expect(brand.statusCode).toBe(400)
    expect(brand.body).toEqual(new InvalidParamError('model'))
  })
})
