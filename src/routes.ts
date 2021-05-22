import { VeiculoController } from '@controllers/VeiculoController'
import { Router } from 'express'
const routes = Router()

const veiculoController = new VeiculoController()
routes.post('/veiculos', veiculoController.create)
routes.get('/', veiculoController.basic)
routes.get('/veiculos', veiculoController.index)
export default routes
