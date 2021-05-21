import Veiculo from '@schemas/Veiculo'
import { ObjectId } from 'mongoose'
export class VeiculoController {
  async create (): Promise<void> {
    await Veiculo.create({
      modelo: 'celta',
      ano: 2010,
      placa: 'XXX4200'

    })
  }

  async remove (_id:ObjectId): Promise<void> {
    await Veiculo.remove({ _id })
  }

  async update (_id:ObjectId): Promise<void> {
    await Veiculo.updateOne({ _id }, {
      modelo: 'celta',
      ano: 2011,
      placa: 'XXX4200'

    })
  }
}
