import { AppError } from '../../../erros/AppError';
import { getRedis, setRedis } from '../RedisProvider';
import axios from 'axios';

async function search(cep: number) {
  const addressRedis = await getRedis(`${cep}-axios`);

  if (addressRedis !== null) {
    return JSON.parse(addressRedis);
  }

  let address = '';

  await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
    address = response['data'];
  });

  if (address['erro']) {
    throw new AppError(`zipCode does not exist`, 400);
  }

  const addressComplete = `${address['logradouro']} - ${address['bairro']}, ${address['localidade']} - ${address['uf']}`;

  setRedis(`${cep}-axios`, JSON.stringify(addressComplete));

  return addressComplete;
}

export { search };
