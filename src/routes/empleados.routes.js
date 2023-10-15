import { Router } from 'express'
import
{
  getEmpleadosId,
  getEmpleados,
  postEmpleados,
  putEmpleados,
  deleteEmpleadosById
} from '../controllers/empleados.controllers.js'

const router = Router()

router.get('/empleados', getEmpleados)
router.get('/empleados/:id', getEmpleadosId)
router.post('/empleados', postEmpleados)
router.put('/empleados/:id', putEmpleados)
router.delete('/empleados/:id', deleteEmpleadosById)

const rutasDeEmpleados = router
export default rutasDeEmpleados
