import { App } from './config/app'
import mongoose from 'mongoose'
import env from './config/env'

const app = new App()
const server = app.Express()

server.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
