class Base64 {
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
};

export default Base64;