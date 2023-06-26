export const SERVER_PORT = 8000;
export const DB_PATH = './src/config/storage/database.sqlite';
export const PASS_SALT = 12;
export const JWT_SECRET = [
  (Math.random() * 100),
  (Math.random() * 100),
  (Math.random() * 100),
  (Math.random() * 100),
  (Math.random() * 100),
  (Math.random() * 100),
  (Math.random() * 100),
  (Math.random() * 100),
  (Math.random() * 100),
  (Math.random() * 100)
].join();
export const JWT_TIME_EXPIRES = '1h';