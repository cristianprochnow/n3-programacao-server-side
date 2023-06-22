import { Router } from 'express';
import AlturaController from '../controllers/AlturaController.js';

const AlturaRouter = Router();

const alturaController = new AlturaController();

AlturaRouter.get('/', alturaController.list);
AlturaRouter.get('/:id', alturaController.show);
AlturaRouter.post('/', alturaController.create);
AlturaRouter.put('/:id', alturaController.update);
AlturaRouter.delete('/:id', alturaController.delete);

export default AlturaRouter;