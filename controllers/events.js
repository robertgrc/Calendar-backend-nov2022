const { response } = require("express");
const Evento = require("../models/Evento");

//obtener eventos
const getEventos = (req, res = response) => {
  res.json({
    ok: true,
    msg: "getEventos",
  });
};

//crear un evento
const crearEvento = async (req, res = response) => {
  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;

    const eventoGuardado = await evento.save();

    res.json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
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
