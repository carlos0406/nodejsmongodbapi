import Usuario from '@schemas/Usuario'
import Veiculo from '@schemas/Veiculo'
import mongoose from 'mongoose'
import request from 'supertest'
import app from '../../app'

describe('Testando os as rotas veiculo controller', () => {
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
    await Usuario.deleteMany({})
    await Veiculo.deleteMany({})
  })

  it('Criando um veiculo ', async () => {
    const response = await request(app)
      .post('/veiculos')
      .send(
        {
          modelo: 'celta',
          ano: 2010,
          placa: 'XXXX4444'
        }
      )

    const { body } = await request(app)
      .get('/veiculos')

    expect(response.status).toBe(201)
    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          modelo: 'celta',
          ano: 2010,
          placa: 'XXXX4444'
        })
      ])
    )
  })

  it('Excluindo um veiculo ', async () => {
  })
})
