import { IsString } from 'class-validator';

export class CreatePaiseDto {
  @IsString()
  nombre: string;

  @IsString()
  provincia: string;

  @IsString()
  localidad: string;
}
