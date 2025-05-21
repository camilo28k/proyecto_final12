import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import { PrismaClient } from 'generated/prisma';
import { UploaderService } from '../services/uploader/s3.service';
import { v4 } from 'uuid';

@Injectable()
export class TechnologyService extends PrismaClient implements OnModuleInit{
  constructor(private readonly uploaderService:UploaderService){
    super()
  }
  async onModuleInit() {
    await this.$connect()
  }
  async create(createTechnologyDto: CreateTechnologyDto, image:Express.Multer.File) {
    const technology = await this.technology.create({
      data:{
        ...createTechnologyDto,
        image: v4()
      }
    })
    return await this.uploaderService.upload(image, technology.image)
  }

  async findAll() {
    const technology = await this.technology.findMany({
      orderBy:{
        createdAt:'desc'
      },
    });
    return await Promise.all(
      technology.map(async(technology)=>{
        const Url = await this.uploaderService.getSignedUrl(technology.image);
        return {...technology, image: Url}
      }),
    );
  }

  findOne(id: string) {
    return this.technology.findFirst({
      where: {id}
    }) 
  }

  update(id: string, updateTechnologyDto: UpdateTechnologyDto) {
    return this.technology.update({
      where: {id},
      data: updateTechnologyDto
    })
  }

  async remove(id: string) {
    const technology = await this.technology.delete({
      where: {id},
    });
    await this.uploaderService.delete(technology.image)
  }
}
