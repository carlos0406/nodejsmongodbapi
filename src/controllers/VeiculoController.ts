import Veiculo from '@schemas/Veiculo'
import { Request, Response } from 'express'

export class VeiculoController {
  async create (request: Request, response: Response) {
    const veiculo = request.body
    await Veiculo.create(
      veiculo
    )
    return response.status(201).send()
  }

  async index (request: Request, response: Response) {
    const veiculos = await Veiculo.find({}).lean()
    return response.json(veiculos)
  }

  async basic (request: Request, response: Response) {
    return response.json({ message: 'oi tudo bem?' })
  }

  async remove (request: Request, response: Response): Promise<void> {
    await Veiculo.remove()
  }

  async update (request: Request, response: Response): Promise<void> {
    await Veiculo.updateOne({
      modelo: 'celta',
      ano: 2011,
      placa: 'XXX4200'

    })
  }
}
