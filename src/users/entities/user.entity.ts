import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Paise } from '../../paises/entities/paise.entity';
import { Role } from '../../roles/entities/role.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  nombre: string;

  @Column('varchar')
  apellido: string;

  @Column('int')
  dni: number;

  @Column('varchar')
  direccion: string;

  @DeleteDateColumn()
  deletedAt?: Date;
  //campo de 'creado a', 'borrado a'
  //idLocalizacion: Pais

  @ManyToOne(() => Role, (role) => role.user)
  role: Role;

  @ManyToOne(() => Paise, (pais) => pais.user)
  pais: Paise;
}
