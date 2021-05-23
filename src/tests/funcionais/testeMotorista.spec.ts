import Usuario from '@schemas/Usuario'
import Veiculo from '@schemas/Veiculo'
import mongoose from 'mongoose'
import request from 'supertest'
import app from '../../app'

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
    await Usuario.deleteMany({})
    await Veiculo.deleteMany({})
  })

  it('Criacao de motorista valido', async () => {
    const veiculoReq = await request(app)
      .post('/veiculos')
      .send(
        {
          modelo: 'celta',
          ano: 2012,
          placa: 'XXXX5444'
        }
      )

    const { status } = await request(app)
      .post('/usuarios')
      .send({
        nome: 'robson',
        telefone: '40028922',
        email: 'robson@gmailcom',
        cpf: '000.000.000-00',
        cnh: '000000000',
        veiculo: veiculoReq.body._id
      })
    expect(status).toBe(201)
  })
})
