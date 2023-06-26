import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController.js';

const UsuarioRouter = Router();

const usuarioController = new UsuarioController();

UsuarioRouter.post('/signup', usuarioController.create.bind(usuarioController));
UsuarioRouter.post('/login', usuarioController.login.bind(usuarioController));

export default UsuarioRouter;