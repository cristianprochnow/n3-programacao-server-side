import { Request, Response } from 'express';
import Password from '../helpers/password.js';
import db from '../config/db/db.js';
import { getNickFromEmail, isValidEmail } from '../utils/email.js';

class UsuarioController {
  constructor() {
    this.Password = new Password();
    this.Usuario = db.usuario;
  }

  /**
   * @param {Request} request
   * @param {Response} response
   */
  async create(request, response) {
    const content = { success: false };

    try {
      const { body } = request;

      const email = body.email;
      // `Password` deve estar em Base64.
      const password = body.password;
      const name = body.name || email;

      if (!email) throw 'Campo [email] é obrigatório para o cadastro.';
      if (!isValidEmail(email)) throw 'Campo [email] possui formato inválido.';
      if (!password) throw 'Campo [password] é obrigatório para o cadastro.';

      const plainPass = this.Password.fromPasswordFormat(password);
      const nick = getNickFromEmail(email);
      const hashPass = this.Password.toHash(plainPass);

      const user = await this.Usuario.create({
        apelido: nick,
        email,
        nome: name,
        password: hashPass
      });

      content = {
        success: true,
        result: user
      };
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