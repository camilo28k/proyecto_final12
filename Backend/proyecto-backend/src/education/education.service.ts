import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { PrismaClient } from 'generated/prisma';
import { UploaderService } from 'src/services/uploader/s3.service';
import { Education } from './entities/education.entity';
import {v4} from 'uuid'
import e from 'express';

@Injectable()
export class EducationService extends PrismaClient implements OnModuleInit {

  async onModuleInit() {
    await this.$connect()
  }
  async create(createEducationDto: CreateEducationDto) {
    return this.education.create({
      data: createEducationDto
    })
  }

   findAll() {
    return this.education.findMany({
      orderBy:{
        createdAt: 'desc'
      }
    })
  }

   findOne(id: string) {
    return this.education.findFirst({
      where: {id}
    })
  }

  update(id: string, updateEducationDto: UpdateEducationDto) {
    return this.education.update({
      where: {id},
      data: updateEducationDto
    })
  }

  remove(id: string) {
    return this.education.delete({
      where: {id}
    });
  }
}
  
