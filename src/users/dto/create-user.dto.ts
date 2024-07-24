import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsNumber()
  dni: number;

  @IsString()
  direccion: string;

  //idLocalizacion: Pais
}
