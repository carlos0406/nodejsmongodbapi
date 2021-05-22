// import Motorista from '@schemas/motorista'

import Usuario from '@schemas/Usuario'
import Veiculo from '@schemas/Veiculo'

export class MotoristaController {
  async create () {
    const veiculos = await Veiculo.find({}).lean()
    const veiculo = veiculos[0]
    await Usuario.create({
      nome: 'robson',
      telefone: '40028922',
      email: 'carlos@carlos.com',
      senha: 'senha',
      cpf: '000.000.000-00',
      cnh: '0000000000',
      veiculo: veiculo

    })
  }
}
