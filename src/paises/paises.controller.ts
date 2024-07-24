import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { UpdatePaiseDto } from './dto/update-paise.dto';
import { Paise } from './entities/paise.entity';
import { PaisesService } from './paises.service';

@Controller('paises')
export class PaisesController {
  constructor(private readonly paisesService: PaisesService) {}

  @Post()
  createPaise(@Body() newUser): Promise<Paise> {
    return this.paisesService.createPaise(newUser);
  }

  @Get()
  getPaises(): Promise<Paise[]> {
    return this.paisesService.getPaises();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paisesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateData: UpdatePaiseDto, @Res() res: Response) {
    return this.paisesService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paisesService.remove(id);
  }
}
