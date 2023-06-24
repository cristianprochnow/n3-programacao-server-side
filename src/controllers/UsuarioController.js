import { Request, Response } from 'express';

class UsuarioController {
  /**
   * @param {Request} request
   * @param {Response} response
   */
  create(request, response) {
    const content = { success: false };

    try {
      const { body } = request;

      const email = body;
      const password = password;

      if (!email) throw 'Campo de [e-mail] é obrigatório para o cadastro.';
      if (!password) throw 'Campo de [password] é obrigatório para o cadastro.';


    } catch (error) {
      content = {
        success: false,
        error
      };
    } finally {
      return response.send(content);
    }
  }
}

export default UsuarioController;