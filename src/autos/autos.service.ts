import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { Auto } from './entities/auto.entity';

@Injectable()
export class AutosService {
  constructor(@InjectRepository(Auto) private autoRepository: Repository<Auto>) {}

  createAuto(auto: CreateAutoDto) {
    const newAuto: CreateAutoDto = this.autoRepository.create(auto);
    return this.autoRepository.save(newAuto);
  }

  getAutos() {
    return this.autoRepository.find();
  }

  findOne(id: string) {
    return this.autoRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateData: UpdateAutoDto) {
    return this.autoRepository.update({ id: id }, updateData);
  }

  async remove(id: string) {
    const aEliminar = await this.autoRepository.findOne({ where: { id: id } });
    return this.autoRepository.softRemove(aEliminar);
  }
}
