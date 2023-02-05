import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import clientRouter from './routers/clientRouter';

dotenv.config();

const port = process.env.PORT || 4000;

const server = express();

server.use(express.json());
server.use(cors());
server.use(clientRouter);

server.listen(port, () => {
  console.log(`Server running on port ${port} !`);
});
