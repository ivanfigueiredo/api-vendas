/* eslint-disable prefer-const */
import { InvalidParamError } from './../../helpers/errors/invalid-param-error'
import { Brand } from '../entities/brand.object-value'
import { text } from './mock'

describe('brand-value.value-object', () => {
  it('should stop creating if mark is less than 2', () => {
    const brand = Brand.create('1')
    expect(brand.statusCode).toBe(400)
    expect(brand.body).toEqual(new InvalidParamError('brand'))
  })
})
