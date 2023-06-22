import { Router } from 'express';
import PetController from '../controllers/PetController.js';

const PetRouter = Router();
const petController = new PetController();

PetRouter.get('/', petController.list);
PetRouter.get('/:id', petController.show);
PetRouter.post('/', petController.create);
PetRouter.put('/:id', petController.update);
PetRouter.delete('/:id', petController.delete);

export default PetRouter;