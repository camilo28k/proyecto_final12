import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EntrepreneurshipService } from './entrepreneurship.service';
import { CreateEntrepreneurshipDto } from './dto/create-entrepreneurship.dto';
import { UpdateEntrepreneurshipDto } from './dto/update-entrepreneurship.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('entrepreneurship')
export class EntrepreneurshipController {
  constructor(private readonly entrepreneurshipService: EntrepreneurshipService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createEntrepreneurshipDto: CreateEntrepreneurshipDto,
  @UploadedFile('image')image:Express.Multer.File
  ) {
    return this.entrepreneurshipService.create(createEntrepreneurshipDto, image);
  }

  @Get()
  findAll() {
    return this.entrepreneurshipService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.entrepreneurshipService.findOne(id);
  }

  @Patch('id/:id')
  update(@Param('id') id: string, @Body() updateEntrepreneurshipDto: UpdateEntrepreneurshipDto) {
    return this.entrepreneurshipService.update(id, updateEntrepreneurshipDto);
  }

  @Delete('id/:id')
  remove(@Param('id') id: string) {
    return this.entrepreneurshipService.remove(id);
  }
}
