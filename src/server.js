import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 4000;

const server = express();

server.use(express.json());
server.use(cors());

server.listen(port, () => {
  console.log(`Server running on port ${port} !`);
});
