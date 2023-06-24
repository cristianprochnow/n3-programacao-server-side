function getEmailPattern() {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
}

export function getNickFromEmail(email) {
  if (!email) return '';
  if (!isValidEmail(email)) return '';

  const splitEmail = email.split('@');

  return splitEmail[0] || '';
}

export function isValidEmail(email) {
  const pattern = getEmailPattern();

  return pattern.test(email);
}