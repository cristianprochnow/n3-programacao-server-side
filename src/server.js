import app from './app.js';
import { SERVER_PORT } from './config/const.js';
import db from './config/db/db.js';

(async () => {
  try {
    await db.connection.sync();
    app.listen(SERVER_PORT);

    console.log(`[app] > servidor rodando na porta ${SERVER_PORT}...`);
  } catch (error) {
    console.error(error);
  }
})();