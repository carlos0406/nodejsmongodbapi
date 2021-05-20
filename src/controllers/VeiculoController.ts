import Veiculo from '@schemas/Veiculo'

export class VeiculoController {
  async create (): Promise<void> {
    console.log('criando veiculo')
    await Veiculo.create({
      modelo: 'celta',
      ano: 2010,
      placa: 'XXX4200'

    })
  }
}
