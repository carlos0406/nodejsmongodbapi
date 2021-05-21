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

  async remove (id:ObjectId): Promise<void> {
    await Veiculo.remove({ _id: id })
  }
}
