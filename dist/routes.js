"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _VeiculoController = require("./controllers/VeiculoController");

var _express = require("express");

const routes = (0, _express.Router)();
const veiculoController = new _VeiculoController.VeiculoController();
routes.post('/veiculos', veiculoController.create);
routes.get('/', veiculoController.basic);
routes.get('/veiculos', veiculoController.index);
var _default = routes;
exports.default = _default;