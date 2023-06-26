import bcrypt from 'bcrypt';
import { PASS_SALT } from '../config/const.js';

class Bcrypt {
  constructor() {
    this.bcrypt = bcrypt;
    this.saltRounds = PASS_SALT;
  }

  async hash(plainValue) {
    if (!plainValue) return '';

    plainValue = this.clean(plainValue);

    const hashValue = await this.bcrypt.hash(plainValue, this.saltRounds);

    return hashValue;
  }

  async isValid(plainValue, hashValue) {
    if (!plainValue) return false;

    plainValue = this.clean(plainValue);

    const isValid = await this.bcrypt.compare(plainValue, hashValue);

    return isValid;
  }

  clean(value) {
    return String(value).trim();
  }
}

export default Bcrypt;