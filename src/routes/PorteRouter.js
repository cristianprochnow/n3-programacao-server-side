import { Router } from 'express';
import PorteController from '../controllers/PorteController.js';

const PorteRouter = Router();
const porteController = new PorteController();

PorteRouter.get('/', porteController.list);
PorteRouter.get('/:id', porteController.show);
PorteRouter.post('/', porteController.create);
PorteRouter.put('/:id', porteController.update);
PorteRouter.delete('/:id', porteController.delete);

export default PorteRouter;