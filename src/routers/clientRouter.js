import { Router } from 'express';
import createClient from '../controllers/clientController';

const clientRouter = Router();

clientRouter.post('/client', createClient);

export default clientRouter;
