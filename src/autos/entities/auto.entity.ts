import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auto')
export class Auto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  modelo: string;

  @Column('text')
  color: string;

  @Column('text')
  patente: string;

  @DeleteDateColumn()
  deletedAt?: Date;
  //campo de 'creado a', 'borrado a'
  //idMarca: Marca
}
