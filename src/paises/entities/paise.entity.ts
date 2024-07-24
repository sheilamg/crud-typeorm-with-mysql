import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('paise')
export class Paise {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre: string;

  @Column('text')
  provincia: string;

  @Column('text')
  localidad: string;

  @DeleteDateColumn()
  deletedAt?: Date;
  //campo de 'creado a', 'borrado a'

  @OneToMany(() => User, (user) => user.pais)
  user: User;
}
