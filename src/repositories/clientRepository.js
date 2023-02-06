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
