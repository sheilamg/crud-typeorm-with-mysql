import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';

@Injectable()
export class MarcasService {
  constructor(@InjectRepository(Marca) private marcaRepository: Repository<Marca>) {}

  createMarca(marca: CreateMarcaDto) {
    const newMarca: CreateMarcaDto = this.marcaRepository.create(marca);
    return this.marcaRepository.save(newMarca);
  }

  getMarcas() {
    return this.marcaRepository.find();
  }

  findOne(id: string) {
    return this.marcaRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateData: UpdateMarcaDto) {
    return this.marcaRepository.update({ id: id }, updateData);
  }

  async remove(id: string) {
    const aEliminar = await this.marcaRepository.findOne({ where: { id: id } });
    return this.marcaRepository.softRemove(aEliminar);
  }
}
