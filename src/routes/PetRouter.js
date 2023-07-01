import { Router } from 'express';
import PetController from '../controllers/PetController.js';

const PetRouter = Router();
const petController = new PetController();

PetRouter.get('/', petController.list.bind(petController));
PetRouter.get('/:id', petController.show.bind(petController));
PetRouter.post('/', petController.create.bind(petController));
PetRouter.put('/:id', petController.update.bind(petController));
PetRouter.delete('/:id', petController.delete.bind(petController));

export default PetRouter;