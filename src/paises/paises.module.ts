import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paise } from './entities/paise.entity';
import { PaisesController } from './paises.controller';
import { PaisesService } from './paises.service';

@Module({
  imports: [TypeOrmModule.forFeature([Paise])],
  controllers: [PaisesController],
  providers: [PaisesService],
})
export class PaisesModule {}
