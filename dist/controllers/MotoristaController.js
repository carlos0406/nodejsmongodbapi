"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MotoristaController = void 0;

var _Usuario = _interopRequireDefault(require("../schemas/Usuario"));

var _Veiculo = _interopRequireDefault(require("../schemas/Veiculo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Motorista from '@schemas/motorista'
class MotoristaController {
  async create() {
    const veiculos = await _Veiculo.default.find({}).lean();
    const veiculo = veiculos[0];
    await _Usuario.default.create({
      nome: 'robson',
      telefone: '40028922',
      email: 'carlos@carlos.com',
      senha: 'senha',
      cpf: '000.000.000-00',
      cnh: '0000000000',
      veiculo: veiculo
    });
  }

}

exports.MotoristaController = MotoristaController;