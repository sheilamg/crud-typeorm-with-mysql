import { IsString } from 'class-validator';

export class CreateAutoDto {
  @IsString()
  modelo: string;

  @IsString()
  color: string;

  @IsString()
  patente: string;
}
