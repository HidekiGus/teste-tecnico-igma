import { createClientService } from '../services/clientService.js';

export async function createClientController(req, res) {
  const { cpf, name, birthdate } = req.body;
  await createClientService(cpf, name, birthdate);
  return res.status(201).send('Cliente criado com sucesso!');
}
