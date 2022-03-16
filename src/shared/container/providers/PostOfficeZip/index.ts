function search(value: number) {
  const axios = require('axios');

  return axios.get(`viacep.com.br/ws/${value}/json/`);
}

export { search };
