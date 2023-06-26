import { Router } from 'express';
import AlturaController from '../controllers/AlturaController.js';
import UsersMiddleware from '../middlewares/UsersMiddleware.js';

const AlturaRouter = Router();

const alturaController = new AlturaController();
const usersMiddleware = new UsersMiddleware();

AlturaRouter.get('/', usersMiddleware.verifyLogin.bind(usersMiddleware), alturaController.list.bind(alturaController));
AlturaRouter.get('/:id', usersMiddleware.verifyLogin.bind(usersMiddleware), alturaController.show.bind(alturaController));
AlturaRouter.post('/', usersMiddleware.verifyLogin.bind(usersMiddleware), alturaController.create.bind(alturaController));
AlturaRouter.put('/:id', usersMiddleware.verifyLogin.bind(usersMiddleware), alturaController.update.bind(alturaController));
AlturaRouter.delete('/:id', usersMiddleware.verifyLogin.bind(usersMiddleware), alturaController.delete.bind(alturaController));

export default AlturaRouter;