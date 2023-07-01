/**
 * @param {string} string
 * @returns {string}
 */
export function numbers(string) {
  if (!string) return null;

  return string.replace(/[^0-9]/g, '');
}