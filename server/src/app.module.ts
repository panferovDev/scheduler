import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupModule } from './group/group.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { getSequelizerConfig } from './configs/sequelize.config';
import { StudentsModule } from './students/students.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DirectionModule } from './direction/direction.module';

@Module({
  imports: [
    GroupModule,
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getSequelizerConfig,
    }),
    StudentsModule,
    DashboardModule,
    DirectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
