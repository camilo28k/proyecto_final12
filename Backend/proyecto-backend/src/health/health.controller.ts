import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { HealthService } from './health.service';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createHealthDto: CreateHealthDto,
  @UploadedFile('image') image:Express.Multer.File,
) {
    return this.healthService.create(createHealthDto, image);
  }

  @Get()
  findAll() {
    return this.healthService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.healthService.findOne(id);
  }

  @Patch('id/:id')
  update(@Param('id') id: string, @Body() updateHealthDto: UpdateHealthDto) {
    return this.healthService.update(id, updateHealthDto);
  }

  @Delete('id/:id')
  remove(@Param('id') id: string) {
    return this.healthService.remove(id);
  }
}
