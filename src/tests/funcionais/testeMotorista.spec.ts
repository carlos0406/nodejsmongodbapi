import Veiculo from '@schemas/Veiculo'
import mongoose from 'mongoose'
// import { request } from 'supertest'
// import app from '../../app'
// import Usuario from '../../schemas/Usuario'

describe('Testando a criacao de um veiculo', () => {
  beforeAll(async () => {
    if (!process.env.MONGO_URL) {
      throw new Error('Servidor mongo db nao foi inicializado.')
    }

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  beforeEach(async () => {
    await Veiculo.deleteMany({})
  })

  it('Criacao de veiculo', async () => {
  })
})
