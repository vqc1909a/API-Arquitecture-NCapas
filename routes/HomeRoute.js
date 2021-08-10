//! Cuando es una funcion, simplemente se llama a la dependencia funcion y y se estara ejcutando todo dentro de este
const express = require('express');

//!Aqui es una funcion xq solamente voy a devovler una osla cosa, si fuera varios, optria por un clase
module.exports = function({HomeController}) {
  const Router = express.Router();
  Router.get("/", HomeController.index());
  return Router;
};

