import { Op } from 'sequelize';
import db from '../config/db/db.js';

class AlturaController {
  constructor() {
    this.altura = db.altura;
  }

  async list(request, response) {
    let content = { success: false };

    try {
      const altura = await this.altura.findAll();

      content = {
        success: true,
        data: altura
      };
    } catch (error) {
      console.error(error);

      content = {
        success: false,
        error
      };
    } finally {
      return response.send(content);
    }
  }

  show(request, response) {
    return response.send({
      success: true
    });
  }

  async create(request, response) {
    let content = { success: false };

    try {
      const { body } = request;

      const description = body.descricao;
      const minHeight = parseFloat(body.altura_min);
      const maxHeight = parseFloat(body.altura_max);

      if (!description) throw 'Tag [descricao] é obrigatória.';
      if (minHeight === NaN) throw 'Tag [altura_min] possui formato inválido.';
      if (maxHeight === NaN) throw 'Tag [altura_max] possui formato inválido.';

      const alturaComIntervaloJaExistente = await this.verifyHeightInterval(minHeight, maxHeight);
      if (alturaComIntervaloJaExistente) throw 'Altura com valores de [altura_min] e [altura_max] já cadastrados no banco de dados. Tente cadastrar valores maiores ou menores que esse intervalo.';

      const altura = await this.altura.create({
        descricao: description,
        alturaMin: minHeight,
        alturaMax: maxHeight
      });

      content = {
        success: true,
        result: altura
      };
    } catch (error) {
      console.error(error);

      content = {
        success: false,
        error
      };
    } finally {
      return response.send(content);
    }
  }

  update(request, response) {
    return response.send({
      success: true
    });
  }

  delete(request, response) {
    return response.send({
      success: true
    });
  }

  async verifyHeightInterval(min, max) {
    const altura = await this.altura.findOne({
      where: {
        [Op.and]: [
          { alturaMin: { [Op.lte]: max } },
          { alturaMax: { [Op.gte]: min } }
        ]
      }
    });

    return altura;
  }
}

export default AlturaController;