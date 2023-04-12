import { ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

export const getSequelizerConfig = async (
  configService: ConfigService,
): Promise<SequelizeModule> => ({
  dialect: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASS'),
  database: configService.get('DB_NAME'),
  synchronize: true,
  models: [],
});
