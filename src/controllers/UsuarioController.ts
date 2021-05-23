import Usuario from '@schemas/Usuario'
import { Request, Response } from 'express'

export class UsuarioController {
  async create (request: Request, response: Response) {
    try {
      const usuario = await Usuario.create(
        request.body
      )
      return response.status(201).json(usuario)
    } catch (error) {
      return response.status(400).send()
    }
  }
}
