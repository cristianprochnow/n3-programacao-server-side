import { Router } from 'express';
import TutorRouter from './routes/TutorRouter.js';
import PetRouter from './routes/PetRouter.js';
import GeneroRouter from './routes/GeneroRouter.js';
import PorteRouter from './routes/PorteRouter.js';
import AlturaRouter from './routes/AlturaRouter.js';
import { path } from './utils/route.js';

const routes = Router();

console.log(path('/alturas'));

routes
  .use(path('tutores'), TutorRouter)
  .use(path('pets'), PetRouter)
  .use(path('generos'), GeneroRouter)
  .use(path('alturas'), AlturaRouter)
  .use(path('portes'), PorteRouter);

export default routes;