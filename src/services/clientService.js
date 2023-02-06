import doCPFsMatch from '../utils/validateCPF.js';
import { createClient } from '../repositories/clientRepository.js';

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
