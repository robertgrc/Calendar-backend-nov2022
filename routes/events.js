const router = require("./auth");

//Obtener eventos
router.get("/", getEventos);

//crear un evento
router.post("/", crearEvento);

//Actualizar evento
router.put("/:id", actualizarEvento);

//Borrar Evento
router.delete("/:id", eliminarEvento);
