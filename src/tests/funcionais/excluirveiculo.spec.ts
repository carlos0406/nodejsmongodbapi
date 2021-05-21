import Veiculo from '@schemas/Veiculo'
import mongoose from 'mongoose'
import { VeiculoController } from '@controllers/VeiculoController'
// import Usuario from '../../schemas/Usuario'

describe('Testando a exclusao de veiculo', () => {
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

  it('Deletando um veiculo', async () => {
    const veiculoController = new VeiculoController()
    await veiculoController.create()
    const list = await Veiculo.find({}).lean()
    const { _id } = list[0]
    await veiculoController.remove(_id)
    expect(list).toEqual(
      expect.arrayContaining([])
    )
  })
})
