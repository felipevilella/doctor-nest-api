import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

ConfigModule.forRoot({
  envFilePath: '.env',
});

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),

  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],

  synchronize: false,
  migrationsRun: true,

  migrations: [__dirname + '/shared/infra/typeorm/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/shared/infra/typeorm/migrations',
  },
};

module.exports = options;
