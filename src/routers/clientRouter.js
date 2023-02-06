import { Router } from 'express';
import { createClientController } from '../controllers/clientController.js';

const clientRouter = Router();

clientRouter.post('/client', createClientController);

export default clientRouter;
