import { Router } from 'express';
import {
  createClientController,
  getClientController,
  getClientsController,
} from '../controllers/clientController.js';

const clientRouter = Router();

clientRouter.post('/client', createClientController);
clientRouter.get('/client', getClientController);
clientRouter.get('/clients/:page', getClientsController);

export default clientRouter;
