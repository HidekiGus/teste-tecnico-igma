import client from '../database/database.js';

export async function createClient(cpf, name, birthdate) {
  await client.client.create({
    data: {
      cpf,
      name,
      birthdate,
    },
  });
}

export async function getClientByCpf(cpf) {
  return await client.client.findMany({
    where: {
      cpf,
    },
  });
}

export async function getClients(clientsToTake, clientsToSkip) {
  return await client.client.findMany({
    skip: clientsToSkip,
    take: clientsToTake,
    orderBy: {
      id: 'desc',
    },
  });
}
