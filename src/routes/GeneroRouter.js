import { Router } from 'express';
import GeneroController from '../controllers/GeneroController.js';

const GeneroRouter = Router();
const generoController = new GeneroController();

GeneroRouter.get('/', generoController.list.bind(generoController));
GeneroRouter.get('/:id', generoController.show.bind(generoController));
GeneroRouter.post('/', generoController.create.bind(generoController));
GeneroRouter.put('/:id', generoController.update.bind(generoController));
GeneroRouter.delete('/:id', generoController.delete.bind(generoController));

export default GeneroRouter;