import express from 'express'
import mongoose from 'mongoose'
import { router } from './routes'

export class App {
  express: any
  constructor () {
    this.express = express()
    this.databases()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
  }

  databases () {
    const MONGO_HOST = 'localhost'
    const MONGO_DB = 'todo_db'
    const URI = `mongodb://${MONGO_HOST}/${MONGO_DB}`

    mongoose.connect(URI)
      .then(
        () => {
          console.log('Connection success')
        },
        (error) => {
          console.log('connection error', error)
        }
      )
  }

  routes () {
    this.express.use(router)
  }

  Express () {
    return this.express
  }
}
