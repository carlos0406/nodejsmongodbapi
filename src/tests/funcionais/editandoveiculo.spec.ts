import Veiculo from '@schemas/Veiculo'
import mongoose from 'mongoose'
import { VeiculoController } from '@controllers/VeiculoController'
// import Usuario from '../../schemas/Usuario'

describe('Testando a edicao de veiculo', () => {
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

  it('Editando um veiculo', async () => {
    const veiculoController = new VeiculoController()
    await veiculoController.create()
    const list = await Veiculo.find({}).lean()
    const { _id } = list[0]
    await veiculoController.update(_id)
    const list2 = await Veiculo.find({}).lean()
    expect(list2).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          modelo: 'celta',
          ano: 2011,
          placa: 'XXX4200'
        })
      ])
    )
  })
})
