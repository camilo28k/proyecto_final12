import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ArtService } from './art.service';
import { CreateArtDto } from './dto/create-art.dto';
import { UpdateArtDto } from './dto/update-art.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('art')
export class ArtController {
  constructor(private readonly artService: ArtService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createArtDto: CreateArtDto,
    @UploadedFile('image') image: Express.Multer.File
    ) {
    return this.artService.create(createArtDto, image);
  }

  @Get()
  findAll() {
    return this.artService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.artService.findOne(id);
  }

  @Patch('id/:id')
  update(@Param('id') id: string, @Body() updateArtDto: UpdateArtDto) {
    return this.artService.update(id, updateArtDto);
  }

  @Delete('id/:id')
  remove(@Param('id') id: string) {
    return this.artService.remove(id);
  }
}
