import { VeiculoController } from '@controllers/VeiculoController'
import { UsuarioController } from '@controllers/UsuarioController'
import { Router } from 'express'
const routes = Router()

const veiculoController = new VeiculoController()
const usuarioController = new UsuarioController()
routes.post('/veiculos', veiculoController.create)
routes.get('/', veiculoController.basic)
routes.get('/veiculos', veiculoController.index)
routes.delete('/veiculos/:_id', veiculoController.remove)
routes.put('/veiculos/:_id', veiculoController.update)
routes.post('/usuarios', usuarioController.create)
routes.get('/usuarios', usuarioController.index)
export default routes
