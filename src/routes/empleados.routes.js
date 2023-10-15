import { Router } from 'express'
import
{
  getEmpleadosId,
  getEmpleados
} from '../controllers/empleados.controllers.js'

const router = Router()

router.get('/empleados', getEmpleados)
router.get('/empleados/:id', getEmpleadosId)

const rutasDeEmpleados = router
export default rutasDeEmpleados
