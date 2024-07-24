import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { AutosService } from './autos.service';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { Auto } from './entities/auto.entity';

@Controller('autos')
export class AutosController {
  constructor(private readonly autosService: AutosService) {}

  @Post()
  createAuto(@Body() newAuto): Promise<Auto> {
    return this.autosService.createAuto(newAuto);
  }

  @Get()
  getAutos(): Promise<Auto[]> {
    return this.autosService.getAutos();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autosService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateData: UpdateAutoDto, @Res() res: Response) {
    return this.autosService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autosService.remove(id);
  }
}
