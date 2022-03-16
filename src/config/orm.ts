import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

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
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],

  synchronize: false,
  migrationsRun: true,

  migrations: [__dirname + '/infra/typeorm/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/infra/typeorm/migrations',
  },
};

module.exports = options;
