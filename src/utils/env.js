function env() {
  return process.env || {};
}

export function get(key) {
  return env()[key] || null;
}