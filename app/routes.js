import { Router } from 'express'
import { saludar } from './controlador.js'
import { saludarMayorEdad } from './controlador.js'
import { validarNombre } from './middleware.js'
import { validarEdad } from './middleware.js'

const router = Router()

router.get("/api/nombre",validarNombre, saludar )
router.get("/api/edad/:edad", validarEdad, saludarMayorEdad)
export default router;