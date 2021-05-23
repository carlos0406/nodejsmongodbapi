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
    const { status } = await request(app)
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

    expect(status).toBe(201)
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

  it('Criando veiculo com dados invalidos', async () => {
    const { status } = await request(app)
      .post('/veiculos')
      .send(
        {
          modelo: 'celta',
          ano: 2010

        }
      )

    expect(status).toBe(400)
  })

  it('Excluindo um veiculo ', async () => {
    const { body } = await request(app)
      .post('/veiculos')
      .send(
        {
          modelo: 'celta',
          ano: 2010,
          placa: 'XXXX4444'
        }
      )
    const id = body._id
    const { status } = await request(app)
      .delete(`/veiculos/${id}`)

    expect(status).toBe(202)
    expect(body).toEqual(
      expect.arrayContaining([])
    )
  })

  it('Tentando criar um veiculo com mesma placa', async () => {
    const veiculo = {
      modelo: 'celta',
      ano: 2010,
      placa: 'XXXX4444'
    }
    await request(app)
      .post('/veiculos')
      .send(
        veiculo
      )
    const { status } = await request(app)
      .post('/veiculos')
      .send(
        veiculo
      )
    const { body } = await request(app)
      .get('/veiculos')
    expect(status).toBe(400)
    expect(body.length).toBe(1)
  })

  it('Tentando fazer update de um veiculo valido', async () => {
    const { body } = await request(app)
      .post('/veiculos')
      .send(
        {
          modelo: 'celta',
          ano: 2010,
          placa: 'XXXX4444'
        }
      )
    const { _id } = body
    const { status } = await request(app)
      .put(`/veiculos/${_id}`)
      .send(
        {
          modelo: 'celta',
          ano: 2011,
          placa: 'XXXX4444'
        }
      )
    const veiculos = await request(app)
      .get('/veiculos')

    expect(status).toBe(204)
    expect(veiculos.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          modelo: 'celta',
          ano: 2011,
          placa: 'XXXX4444'
        })
      ])
    )
  })

  it('tentando fazer update de um veiculo que nao existe', async () => {
    const _id = '8fs8das8d89afas'
    const { status } = await request(app)
      .put(`/veiculos/${_id}`)
      .send(
        {
          modelo: 'celta',
          ano: 2011,
          placa: 'XXXX4444'
        }
      )
    expect(status).toBe(400)
  })
})
