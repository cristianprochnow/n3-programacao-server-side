import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController.js';

const UsuarioRouter = Router();

const usuarioController = new UsuarioController();

UsuarioRouter.post('/', usuarioController.create);

export default UsuarioRouter;