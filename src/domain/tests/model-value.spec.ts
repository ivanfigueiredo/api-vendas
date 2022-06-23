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

  it('should stop creating if tag is greater than 255', () => {
    let text: String = ''
    for (let i = 0; i < 260; i++) {
      text.concat('11144454545455544')
    }
    const brand = Model.create(text.toString())
    expect(brand.statusCode).toBe(400)
    expect(brand.body).toEqual(new InvalidParamError('model'))
  })

  it('should create success', () => {
    const brand = Model.create('111')
    expect(brand.statusCode).toBe(200)
    expect(brand.body).toBeTruthy()
  })

  it('should create success', async () => {
    const brand = Model.create(text)
    expect(brand.statusCode).toBe(200)
    expect(brand.body).toBeTruthy()
  })
})
