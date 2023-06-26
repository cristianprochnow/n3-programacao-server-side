import JsonWebToken from '../lib/jwt.js';

class UsersMiddleware {
  constructor() {
    this.JWT = new JsonWebToken();
  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  verifyLogin(request, response, next) {
    let content = {
      success: false
    };

    try {
      const headers = request.headers;
      const token = headers['token'];

      if (!token) throw 'Tag [token] não enviada no cabeçalho da requisição.';
      if (!this.JWT.isValid(token)) throw 'Token de autenticação inválido ou expirado.';

      return next();
    } catch (error) {
      content = {
        success: false,
        error
      };

      return response
        .status(401)
        .send(content);
    }
  }
}

export default UsersMiddleware;