import { Router } from 'express';
import DadosController from '../controllers/dadosController';

const routes = Router();

routes.post('/dados', DadosController.receberDados);

export default routes;