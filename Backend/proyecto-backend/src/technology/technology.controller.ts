import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { TechnologyService } from './technology.service';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('technology')
export class TechnologyController {
  constructor(private readonly technologyService: TechnologyService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createTechnologyDto: CreateTechnologyDto,
  @UploadedFile('image') image:Express.Multer.File
  ) {
    return this.technologyService.create(createTechnologyDto, image);
  }

  @Get()
  findAll() {
    return this.technologyService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.technologyService.findOne(id);
  }

  @Patch('id/:id')
  update(@Param('id') id: string, @Body() updateTechnologyDto: UpdateTechnologyDto) {
    return this.technologyService.update(id, updateTechnologyDto);
  }

  @Delete('id/:id')
  remove(@Param('id') id: string) {
    return this.technologyService.remove(id);
  }
}
