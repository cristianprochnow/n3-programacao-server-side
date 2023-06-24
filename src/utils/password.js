import Base64 from '../lib/base64.js';

class Password {
  constructor(password) {
    this.password = password;
    this.Base64 = new Base64();
  }

  toPasswordFormat() {
    return this.Base64.encode(this.password);
  }

  fromPasswordFormat() {
    return this.Base64.decode(this.password);
  }

  hashPassword() {}

  isValidPassword() {}
}

export default Password;