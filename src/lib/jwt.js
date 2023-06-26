import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_TIME_EXPIRES } from '../config/const.js';

class JsonWebToken {
  constructor() {
    this.secret = JWT_SECRET;
    this.expiresIn = JWT_TIME_EXPIRES;
    this.jwt = jwt;
  }

  sign(uniqueValue) {
    return this.jwt.sign(
      { value: uniqueValue },
      this.secret,
      { expiresIn: this.expiresIn }
    );
  }

  isValid(valueToCompare) {
    if (!valueToCompare) return false;

    return this.jwt.verify(valueToCompare, this.secret);
  }
}

export default JsonWebToken;