export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super()
    this.name = 'InvalidParamError'
    this.message = `Invalild param: ${paramName}`
  }
}
