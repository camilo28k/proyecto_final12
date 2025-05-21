import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateArtDto } from './dto/create-art.dto';
import { UpdateArtDto } from './dto/update-art.dto';
import { PrismaClient } from '@prisma/client';
import { UploaderService } from 'src/services/uploader/s3.service';
import {v4} from 'uuid'

@Injectable()
export class ArtService extends PrismaClient implements OnModuleInit {
  constructor(private readonly uploaderService:UploaderService){
    super()
  }
  async onModuleInit() {
    await this.$connect()
  }
  async create(createArtDto: CreateArtDto, image: Express.Multer.File) {
    const art= await this.art.create({
      data:{
        ...createArtDto,
        image: v4()
      },
    });
    await this.uploaderService.upload(image, art.image)
  }

  async findAll() {
    const art = await this.art.findMany({
      orderBy:{
        createdAt: 'desc'
      },
    });
    return await Promise.all(
      art.map(async(art)=>{
        const Url = await this.uploaderService.getSignedUrl(art.image)
        return {...art,image:Url}
      }),
    );
  }

  findOne(id: string) {
    return this.art.findFirst({
      where: {id}
    });
  }

  update(id: string, updateArtDto: UpdateArtDto) {
    return this.art.update({
      where: {id},
      data: updateArtDto
    })
  }

  async remove(id: string) {
    const art = await this.art.delete({
      where: {id}
    });
    await this.uploaderService.delete(art.image)
  }
}
