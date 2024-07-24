import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lenguaje } from './entities/lenguaje.entity';
import { LenguajesController } from './lenguajes.controller';
import { LenguajesService } from './lenguajes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lenguaje])],
  controllers: [LenguajesController],
  providers: [LenguajesService],
})
export class LenguajesModule {}
