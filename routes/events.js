/*
Event Routes
/api/events
*/
const { Router } = require("express");
const { check } = require("express-validator");

const { isDate } = require("../helpers/isDate");

const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");
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
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "fecha de inicio es obligatoria").custom(isDate),
    check("end", "fecha de inicio es obligatoria").custom(isDate),
    validarCampos,
  ],

  crearEvento
);

//Actualizar evento
router.put("/:id", actualizarEvento);

//Borrar Evento
router.delete("/:id", eliminarEvento);

module.exports = router;
