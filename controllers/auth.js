const { response } = require("express");

const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;
  //console.log(name, email, password);
  if (name.length < 5) {
    return res.json({
      ok: false,
      msg: "El nombre debe de ser de 5 letras",
    });
  }

  res.json({
    ok: true,
    msg: "registro",
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
