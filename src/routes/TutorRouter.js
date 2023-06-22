import { Router } from 'express';
import TutorController from '../controllers/TutorController.js';

const TutorRouter = Router();
const tutorController = new TutorController();

TutorRouter.get('/', tutorController.list);
TutorRouter.get('/:id', tutorController.show);
TutorRouter.post('/', tutorController.create);
TutorRouter.put('/:id', tutorController.update);
TutorRouter.delete('/:id', tutorController.delete);

export default TutorRouter;