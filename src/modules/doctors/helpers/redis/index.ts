import {
  getRedis,
  setRedis,
} from 'src/shared/container/providers/RedisProvider';
import { ListDoctorDto } from '../../dto/list-doctor.dto';

async function saveRedis(data: ListDoctorDto[], filter: ListDoctorDto) {
  if (filter.cep || filter.id || filter.specialties) {
    await setRedis(
      `${filter.cep || filter.id || filter.specialties}`,
      JSON.stringify(JSON.stringify(data)),
    );
  }
}

async function findRedis(data: ListDoctorDto) {
  if (data.cep || data.id || data.specialties) {
    const result = await getRedis(`${data.cep || data.id || data.specialties}`);

    if (result) {
      return JSON.parse(result);
    }

    return false;
  }
}

export { saveRedis, findRedis };
