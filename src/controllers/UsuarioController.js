import Password from '../helpers/password.js';
import db from '../config/db/db.js';
import { getNickFromEmail, isValidEmail } from '../utils/email.js';
import JsonWebToken from '../lib/jwt.js';

class UsuarioController {
  constructor() {
    this.Password = new Password();
    this.Usuario = db.usuario;
    this.JWT = new JsonWebToken();
  }

  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  async create(request, response) {
    let content = { success: false };

    try {
      const { body } = request;

      const email = body.email;
      // `Password` deve estar em Base64.
      const password = body.password;
      const name = body.name || email;

      if (!email) throw 'Campo [email] é obrigatório para o cadastro.';
      if (!isValidEmail(email)) throw 'Campo [email] possui formato inválido.';
      if (!password) throw 'Campo [password] é obrigatório para o cadastro.';
      if (!this.Password.isValidEncoding(password)) throw 'A senha enviada tem que estar no formato Base64.';

      const userAlreadyExists = await this.findByEmail(email);
      if (userAlreadyExists) throw `Usuário com e-mail [${email}] já possui uma conta.`;

      const plainPass = this.Password.fromPasswordFormat(password);
      const nick = getNickFromEmail(email);
      const hashPass = await this.Password.toHash(plainPass);

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
  async login(request, response) {
    let content = { success: false };

    try {
      const { email, password } = request.body;

      if (!email) throw 'Campo [email] é obrigatório para o cadastro.';
      if (!isValidEmail(email)) throw 'Campo [email] possui formato inválido.';
      if (!password) throw 'Campo [password] é obrigatório para o cadastro.';
      if (!this.Password.isValidEncoding(password)) throw 'A senha enviada tem que estar no formato Base64.';

      const user = await this.findByEmail(email);
      if (!user) throw `Nenhum usuário encontrado com o e-mail [${email}]`;

      const plainPass = this.Password.fromPasswordFormat(password);
      const savedPass = user.password;

      const isValid = await this.Password.isValid(plainPass, savedPass);
      if (!isValid) throw 'Dados de login incorretos.'

      const token = this.JWT.sign(user.id);
      if (!token) throw `Não foi possível completar o login para o e-mail [${email}]`;

      content.success = true;
      content.token = token;
    } catch (error) {
      content = {
        success: false,
        error
      };
    } finally {
      return response.send(content);
    }
  }

  async findByEmail(email) {
    const user = this.Usuario.findOne({
      where: {
        email: email
      }
    });

    return user;
  }
}

export default UsuarioController;