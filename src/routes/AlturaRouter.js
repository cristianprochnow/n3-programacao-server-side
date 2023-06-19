import { Router } from 'express';
import AlturaController from '../controllers/AlturaController.js';

const AlturaRouter = Router();

const alturaController = new AlturaController();

AlturaRouter.get('/', alturaController.list);

export default AlturaRouter;