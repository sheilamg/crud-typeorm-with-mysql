import { IsString } from 'class-validator';

export class CreateLenguajeDto {
  @IsString()
  nombre: string;
}
