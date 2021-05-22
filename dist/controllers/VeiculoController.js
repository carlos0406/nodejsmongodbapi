"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VeiculoController = void 0;

var _Veiculo = _interopRequireDefault(require("../schemas/Veiculo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VeiculoController {
  async create(request, response) {
    const veiculo = request.body;
    await _Veiculo.default.create(veiculo);
    return response.status(201).send();
  }

  async index(request, response) {
    const veiculos = await _Veiculo.default.find({}).lean();
    return response.json(veiculos);
  }

  async basic(request, response) {
    return response.json({
      message: 'oi tudo bem?'
    });
  }

  async remove(request, response) {
    await _Veiculo.default.remove();
  }

  async update(request, response) {
    await _Veiculo.default.updateOne({
      modelo: 'celta',
      ano: 2011,
      placa: 'XXX4200'
    });
  }

}

exports.VeiculoController = VeiculoController;