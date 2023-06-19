function baseUrl() {
  return '/api';
}

export function path(path) {
  return `${baseUrl()}/${path}`;
}