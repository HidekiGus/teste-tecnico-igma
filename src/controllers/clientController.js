import {
  createClientService,
  getClientService,
} from '../services/clientService.js';

export async function createClientController(req, res) {
  const { cpf, name, birthdate } = req.body;
  await createClientService(cpf, name, birthdate);
  return res.status(201).send('Cliente criado com sucesso!');
}

export async function getClient(req, res) {
  const { cpf } = req.body;
  const clientData = await getClientService(cpf);
  return res.status(200).send(clientData);
}
