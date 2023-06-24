import Base64 from '../lib/base64.js';
import Bcrypt from '../lib/bcrypt.js';

class Password {
  constructor() {
    this.Base64 = new Base64();
    this.Bcrypt = new Bcrypt();
  }

  toPasswordFormat(plainValue) {
    return this.Base64.encode(plainValue);
  }

  fromPasswordFormat(formatValue) {
    return this.Base64.decode(formatValue);
  }

  async toHash(plainValue) {
    const hashValue = await this.Bcrypt.hash(plainValue);

    return hashValue;
  }

  async isValid(plainValue, encryptValue) {
    const isValidPass = await this.Bcrypt.isValid(plainValue, encryptValue);

    return isValidPass;
  }
}

export default Password;