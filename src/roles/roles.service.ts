import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(@InjectRepository(Role) private roleRepository: Repository<Role>) {}

  createRole(role: CreateRoleDto) {
    const newRole: CreateRoleDto = this.roleRepository.create(role);
    return this.roleRepository.save(newRole);
  }

  getRoles() {
    return this.roleRepository.find();
  }

  findOne(id: string) {
    return this.roleRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateData: UpdateRoleDto) {
    return this.roleRepository.update({ id: id }, updateData);
  }

  async remove(id: string) {
    const aEliminar = await this.roleRepository.findOne({ where: { id: id } });
    return this.roleRepository.softRemove(aEliminar);
  }
}
