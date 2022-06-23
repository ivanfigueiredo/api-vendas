export class MissingParamError extends Error {
  constructor (paramName: string) {
    super()
    this.message = `Missing param: ${paramName}`
  }
}
