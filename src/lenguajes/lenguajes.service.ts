import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { UpdateLenguajeDto } from './dto/update-lenguaje.dto';
import { Lenguaje } from './entities/lenguaje.entity';

@Injectable()
export class LenguajesService {
  constructor(@InjectRepository(Lenguaje) private lenguajeRepository: Repository<Lenguaje>) {}

  createLenguaje(lenguaje: CreateLenguajeDto) {
    const newLenguaje: CreateLenguajeDto = this.lenguajeRepository.create(lenguaje);
    return this.lenguajeRepository.save(newLenguaje);
  }

  getLenguajes() {
    return this.lenguajeRepository.find();
  }

  findOne(id: string) {
    return this.lenguajeRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateData: UpdateLenguajeDto) {
    return this.lenguajeRepository.update({ id: id }, updateData);
  }

  async remove(id: string) {
    const aEliminar = await this.lenguajeRepository.findOne({ where: { id: id } });
    return this.lenguajeRepository.softRemove(aEliminar);
  }
}
