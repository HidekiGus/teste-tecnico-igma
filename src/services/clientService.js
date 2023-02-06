import doCPFsMatch from '../utils/validateCPF.js';
import {
  createClient,
  getClientByCpf,
} from '../repositories/clientRepository.js';

export async function createClientService(cpf, name, birthdate) {
  if (cpf == null || name == null || birthdate == null) {
    throw {
      type: 'unprocessableEntity',
      message: 'Cheque todos os campos e tente novamente!',
    };
  }
  if (!doCPFsMatch(cpf)) {
    throw {
      type: 'unprocessableEntity',
      message: 'Este CPF é inválido!',
    };
  }
  return await createClient(cpf, name, birthdate);
}

export async function getClientService(cpf) {
  const clientData = await getClientByCpf(cpf);
  if (clientData.length === 0) {
    throw { type: 'notFound', message: 'Não existe um cliente com esse CPF!' };
  }
  console.log(clientData);
  return clientData;
}
