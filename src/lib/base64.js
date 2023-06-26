class Base64 {
  constructor() {
    this.pattern = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  }

  encode(plainValue) {
    const buffer = Buffer.alloc(plainValue);
    const base64 = buffer.toString('base64');

    return base64;
  }

  decode(encodedText) {
    const buffer = Buffer.from(encodedText, 'base64');
    const plainValue = buffer.toString('utf-8');

    return plainValue;
  }

  isValidFormat(valueToCompare) {
    return this.pattern.test(valueToCompare);
  }
};

export default Base64;