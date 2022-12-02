const { response } = require("express");
//obtener eventos
const getEventos = (req, res = response) => {
  res.json({
    ok: true,
    msg: "getEventos",
  });
};

//crear un evento
const crearEvento = (req, res = response) => {
  //Verificar que tenga el evento.
  console.log(req.body);
  res.json({
    ok: true,
    msg: "getEventos",
  });
};

//Actualizar evento
const actualizarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "getEventos",
  });
};

//Borrar evento
const eliminarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "getEventos",
  });
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
