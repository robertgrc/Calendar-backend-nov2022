/*
Event Routes
/api/events
*/
const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const router = Router();
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

router.use(validarJWT);

//Obtener eventos
router.get("/", getEventos);

//crear un evento
router.post("/", crearEvento);

//Actualizar evento
router.put("/:id", actualizarEvento);

//Borrar Evento
router.delete("/:id", eliminarEvento);

module.exports = router;
