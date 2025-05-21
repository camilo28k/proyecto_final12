import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateEntrepreneurshipDto } from './dto/create-entrepreneurship.dto';
import { UpdateEntrepreneurshipDto } from './dto/update-entrepreneurship.dto';
import { PrismaClient } from '@prisma/client';
import { v4 } from 'uuid';
import { UploaderService } from '../services/uploader/s3.service';

@Injectable()
export class EntrepreneurshipService extends PrismaClient implements OnModuleInit{
  constructor(private readonly uploaderService:UploaderService){
    super()
  }
  async onModuleInit() {
    await this.$connect()
  }
  async create(createEntrepreneurshipDto: CreateEntrepreneurshipDto, image: Express.Multer.File) {
    const Entrepreneurship = await this.entrepreneurship.create({
      data: {
        ...createEntrepreneurshipDto,
        image: v4()
      },
    });
    await this.uploaderService.upload(image, Entrepreneurship.image)
  }

  async findAll() {
    const Entrepreneurship = await this.entrepreneurship.findMany({
      orderBy:{
        createdAt:'desc'
      },
    });
    return await Promise.all(
      Entrepreneurship.map(async(Entrepreneurship)=>{
        const Url = await this.uploaderService.getSignedUrl(Entrepreneurship.image);
        return {...Entrepreneurship, image:Url}
      }),
    );
  }

  findOne(id: string) {
    return this.entrepreneurship.findFirst({
      where: {id}
    });
  }

  update(id: string, updateEntrepreneurshipDto: UpdateEntrepreneurshipDto) {
    return this.entrepreneurship.update({
      where: {id},
      data: updateEntrepreneurshipDto
    });
  }

  async remove(id: string) {
    const Entrepreneurship = await this.entrepreneurship.delete({
      where: {id}
    });
    await this.uploaderService.delete(Entrepreneurship.image)
  }
}
