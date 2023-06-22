import { Router } from 'express';
import GeneroController from '../controllers/GeneroController.js';

const GeneroRouter = Router();
const generoController = new GeneroController();

GeneroRouter.get('/', generoController.list);
GeneroRouter.get('/:id', generoController.show);
GeneroRouter.post('/', generoController.create);
GeneroRouter.put('/:id', generoController.update);
GeneroRouter.delete('/:id', generoController.delete);

export default GeneroRouter;