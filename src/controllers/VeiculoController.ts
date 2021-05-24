import Veiculo from '@schemas/Veiculo'
import { Request, Response } from 'express'
export class VeiculoController {
  async create (request: Request, response: Response) {
    try {
      const veiculo = await Veiculo.create(
        request.body
      )
      return response.status(201).json(veiculo)
    } catch (error) {
      return response.status(400).send()
    }
  }

  async index (request: Request, response: Response) {
    const veiculos = await Veiculo.find({}).lean()
    return response.json(veiculos)
  }

  async basic (request: Request, response: Response) {
    return response.json({ message: 'Olá, AWS 2 2' })
  }

  async remove (request: Request, response: Response) {
    const { _id } = request.params
    await Veiculo.deleteOne({ _id })
    return response.status(202).send()
  }

  async update (request: Request, response: Response) {
    try {
      const veiculo = request.body
      const { _id } = request.params
      veiculo._id = _id
      await Veiculo.updateOne(
        veiculo
      )

      return response.status(204).send()
    } catch (error) {
      return response.status(400).send()
    }
  }
}
