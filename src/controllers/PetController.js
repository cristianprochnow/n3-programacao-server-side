import db from '../config/db/db.js';
import AlturaController from './AlturaController.js';
import GeneroController from './GeneroController.js';
import TutorController from './TutorController.js';

class PetController {
  constructor() {
    this.pet = db.pet;
    this.alturaController = new AlturaController();
    this.tutorController = new TutorController();
    this.generoController = new GeneroController()
  }

  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  async list(request, response) {
    let content = { success: false };

    try {
      const { tutor_id, altura_id } = request.query;

      const where = {};

      if (tutor_id) {
        where.tutor = tutor_id;
      }
      if (altura_id) {
        where.altura = altura_id;
      }

      const pet = await this.pet.findAll({ where });

      content = {
        success: true,
        data: pet
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

      const petCadastrado = await this.pet.findByPk(id);
      if (!petCadastrado) throw `Não existe um registro de Pet com código [${id}].`;

      content = {
        success: true,
        result: petCadastrado
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

      let name = body.nome;
      let gender = body.genero;
      let height = body.altura;
      let guardian = body.tutor;

      if (!name) throw 'Campo [nome] é obrigatório.';
      if (!gender) throw 'Campo [genero] é obrigatório.';
      if (!height) throw 'Campo [altura] é obrigatório.';
      if (!guardian) throw 'Campo [tutor] é obrigatório.';

      const generoEncontrado = await this.generoController.select(gender);
      const alturaEncontrado = await this.alturaController.select(height);
      const tutorEncontrado = await this.tutorController.select(guardian);

      if (!generoEncontrado) throw `Não foi encontrado Gênero com o código [${gender}].`;
      if (!alturaEncontrado) throw `Não foi encontrado Altura com o código [${height}].`;
      if (!tutorEncontrado) throw `Não foi encontrado Tutor com o código [${guardian}].`;

      const pet = await this.pet.create({
        nome: name,
        genero: gender,
        altura: height,
        tutor: guardian
      });

      content = {
        success: true,
        result: pet
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

      let name = body.nome;
      let gender = body.genero;
      let height = body.altura;
      let guardian = body.tutor;

      if (!id) throw '[id] de filtro não enviado nos parâmetros da rota.';

      const petCadastrado = await this.pet.findByPk(id);
      if (!petCadastrado) throw `Não existe um registro de pet com código [${id}].`;

      petCadastrado.nome = name;
      petCadastrado.genero = gender;
      petCadastrado.altura = height;
      petCadastrado.tutor = guardian;

      const pet = await petCadastrado.save();

      content = {
        success: true,
        result: pet
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

      const petCadastrado = await this.pet.findByPk(id);
      if (!petCadastrado) throw `Não existe um registro de Pet com código [${id}].`;

      await petCadastrado.destroy();

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

export default PetController;