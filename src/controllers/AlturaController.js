import { Op } from 'sequelize';
import db from '../config/db/db.js';
import { DEFAULT_HEIGHTS } from '../config/const.js';

class AlturaController {
  constructor() {
    this.altura = db.altura;
  }

  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
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

  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  async show(request, response) {
    let content = { success: false };

    try {
      const { params } = request;
      const { id } = params;

      if (!id) throw '[id] de filtro não enviado nos parâmetros da rota.';

      const alturaCadastrada = await this.altura.findByPk(id);
      if (!alturaCadastrada) throw `Não existe um registro de Altura com código [${id}].`;

      content = {
        success: true,
        result: alturaCadastrada
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

  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  async create(request, response) {
    let content = { success: false };

    try {
      const { body } = request;

      let description = body.descricao;
      const minHeight = parseFloat(body.altura_min);
      const maxHeight = parseFloat(body.altura_max);

      if (minHeight === NaN) throw 'Tag [altura_min] possui formato inválido.';
      if (maxHeight === NaN) throw 'Tag [altura_max] possui formato inválido.';

      const alturaComIntervaloJaExistente = await this.verifyHeightInterval(minHeight, maxHeight);
      if (alturaComIntervaloJaExistente) throw 'Altura com valores de [altura_min] e [altura_max] já cadastrados no banco de dados. Tente cadastrar valores maiores ou menores que esse intervalo.';

      if (!description) {
        if (maxHeight <= 15 && minHeight <= 15) {
          description = DEFAULT_HEIGHTS.short;
        } else if (minHeight > 15 && maxHeight <= 45) {
          description = DEFAULT_HEIGHTS.medium;
        } else {
          description = DEFAULT_HEIGHTS.tall;
        }
      }

      const altura = await this.altura.create({
        porte: description,
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

  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  async update(request, response) {
    let content = { success: false };

    try {
      const { body, params } = request;
      const { id } = params;

      let description = body.descricao;
      const minHeight = parseFloat(body.altura_min);
      const maxHeight = parseFloat(body.altura_max);

      if (!id) throw '[id] de filtro não enviado nos parâmetros da rota.';
      if (minHeight === NaN) throw 'Tag [altura_min] possui formato inválido.';
      if (maxHeight === NaN) throw 'Tag [altura_max] possui formato inválido.';

      const alturaCadastrada = await this.altura.findByPk(id);
      if (!alturaCadastrada) throw `Não existe um registro de Altura com código [${id}].`;

      const alturaComIntervaloJaExistente = await this.verifyHeightInterval(minHeight, maxHeight);
      if (
        alturaComIntervaloJaExistente
        && alturaComIntervaloJaExistente.id != id
      ) throw 'Altura com valores de [altura_min] e [altura_max] já cadastrados no banco de dados. Tente cadastrar valores maiores ou menores que esse intervalo.';

      if (!description) {
        if (maxHeight <= 15 && minHeight <= 15) {
          description = DEFAULT_HEIGHTS.short;
        } else if (minHeight > 15 && maxHeight <= 45) {
          description = DEFAULT_HEIGHTS.medium;
        } else {
          description = DEFAULT_HEIGHTS.tall;
        }
      }

      alturaCadastrada.porte = description;
      alturaCadastrada.alturaMin = minHeight;
      alturaCadastrada.alturaMax = maxHeight;

      const altura = await alturaCadastrada.save();

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

  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  async delete(request, response) {
    let content = { success: false };

    try {
      const { params } = request;
      const { id } = params;

      if (!id) throw '[id] de filtro não enviado nos parâmetros da rota.';

      const alturaCadastrada = await this.altura.findByPk(id);
      if (!alturaCadastrada) throw `Não existe um registro de Altura com código [${id}].`;

      await alturaCadastrada.destroy();

      content = { success: true };
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