import { AppError } from '../../../erros/AppError';

async function search(cep: number) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axios = require('axios');
  let address = '';

  await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
    address = response['data'];
  });

  if (address['erro']) {
    throw new AppError(`zipCode does not exist`, 400);
  }

  return `${address['logradouro']} - ${address['bairro']}, ${address['localidade']} - ${address['uf']}`;
}

export { search };
