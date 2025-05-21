import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';
import { PrismaClient } from '@prisma/client';
import {v4} from 'uuid';
import { UploaderService } from 'src/services/uploader/s3.service';

@Injectable()
export class HealthService extends PrismaClient implements OnModuleInit {
  constructor(private readonly uploaderService:UploaderService){
    super();
  }
  async onModuleInit() {
    await this.$connect();
  }
  async create(createHealthDto: CreateHealthDto, image: Express.Multer.File) {
    const health = await this.health.create({
      data:{
        ...createHealthDto,
        image: v4()
      },
      })
    await this.uploaderService.upload(image, health.image)
  }

  async findAll() {
    const healt = await this.health.findMany({
      orderBy:{
        createdAt: 'desc'
      }
    })
    return await Promise.all(
      healt.map(async(health)=>{
        const Url = await this.uploaderService.getSignedUrl(health.image);
        return {...health, image:Url}
      }),
    );
  }

  findOne(id: string) {
    return this.health.findFirst({
      where: {id}
    })
  }

  update(id: string, updateHealthDto: UpdateHealthDto) {
    return this.health.update({
      where: {id},
      data: updateHealthDto
    })
  }

  async remove(id: string) {
    const health = await this.health.delete({
      where: {id}
    })
    await this.uploaderService.delete(health.image)
  }
}
