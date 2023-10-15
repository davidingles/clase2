import { Router } from 'express'

import { getIndex } from '../controllers/index.controllers.js'

const router = Router()

router.get('/', getIndex)

const rutasIndex = router
export default rutasIndex
