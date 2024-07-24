import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutosController } from './autos.controller';
import { AutosService } from './autos.service';
import { Auto } from './entities/auto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auto])],
  controllers: [AutosController],
  providers: [AutosService],
})
export class AutosModule {}
