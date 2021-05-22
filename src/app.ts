import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()

mongoose
  .connect(process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
app.use(express.json())
app.use(routes)

export default app
