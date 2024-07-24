import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paise } from '../paises/entities/paise.entity';
import { Role } from '../roles/entities/role.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    @InjectRepository(Paise)
    private paiseRepository: Repository<Paise>,
  ) {}

  createUser(user: CreateUserDto) {
    const newUser: CreateUserDto = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  getUsers() {
    return this.userRepository.find({ relations: { role: true, pais: true } });
  }

  findOne(id: string) {
    return this.userRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateData: UpdateUserDto) {
    return this.userRepository.update({ id: id }, updateData);
  }

  async remove(id: string) {
    const aEliminar = await this.userRepository.findOne({ where: { id: id } });
    return this.userRepository.softRemove(aEliminar);
  }
  //buscar el id findOne, y despues retornar con .softRemove(data)
}
