import express from 'express'
import ControllerMarcas from '../controller/marcas.js'

const router = express.Router()

router.get("/marcas", ControllerMarcas.buscar)
router.get("/marcas/:id", ControllerMarcas  .buscarUm)
router.post("/marcas", ControllerMarcas.criar)
router.put("/marcas/:id", ControllerMarcas.alterar)
router.delete("/marcas/:id", ControllerMarcas.deletar)

export default router


