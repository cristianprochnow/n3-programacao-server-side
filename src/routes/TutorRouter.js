import { Router } from 'express';
import TutorController from '../controllers/TutorController.js';

const TutorRouter = Router();
const tutorController = new TutorController();

TutorRouter.get('/', tutorController.list.bind(tutorController));
TutorRouter.get('/:id', tutorController.show.bind(tutorController));
TutorRouter.post('/', tutorController.create.bind(tutorController));
TutorRouter.put('/:id', tutorController.update.bind(tutorController));
TutorRouter.delete('/:id', tutorController.delete.bind(tutorController));

export default TutorRouter;