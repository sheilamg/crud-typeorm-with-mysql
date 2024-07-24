import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PaisesModule } from './paises/paises.module';
import { MarcasModule } from './marcas/marcas.module';
import { LenguajesModule } from './lenguajes/lenguajes.module';
import { AutosModule } from './autos/autos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Bootcamp052024',
      database: 'db_prueba',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    UsersModule,
    RolesModule,
    PaisesModule,
    MarcasModule,
    LenguajesModule,
    AutosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
