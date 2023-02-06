import { Router } from 'express';
import {
  createClientController,
  getClient,
} from '../controllers/clientController.js';

const clientRouter = Router();

clientRouter.post('/client', createClientController);
clientRouter.get('/client', getClient);

export default clientRouter;
