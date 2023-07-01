import db from '../config/db/db.js';

class GeneroController {
  constructor() {
    this.genero = db.genero;
  }
  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  async list(request, response) {
    let content = { success: false };

    try {
      const genero = await this.genero.findAll();

      content = {
        success: true,
        data: genero
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

      const generoCadastrado = await this.genero.findByPk(id);
      if (!generoCadastrado) throw `Não existe um registro de Gênero com código [${id}].`;

      content = {
        success: true,
        result: generoCadastrado
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

      const genero = await this.genero.create({
        descricao: description
      });

      content = {
        success: true,
        result: genero
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

      if (!id) throw '[id] de filtro não enviado nos parâmetros da rota.';

      const generoCadastrado = await this.genero.findByPk(id);
      if (!generoCadastrado) throw `Não existe um registro de Gênero com código [${id}].`;

      generoCadastrado.descricao = description;

      const genero = await generoCadastrado.save();

      content = {
        success: true,
        result: genero
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

      const generoCadastrado = await this.genero.findByPk(id);
      if (!generoCadastrado) throw `Não existe um registro de Gênero com código [${id}].`;

      await generoCadastrado.destroy();

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
}

export default GeneroController;