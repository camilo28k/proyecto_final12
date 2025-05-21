import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { EducationModule } from './education/education.module';
import { TechnologyModule } from './technology/technology.module';
import { ArtModule } from './art/art.module';
import { EntrepreneurshipModule } from './entrepreneurship/entrepreneurship.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [HealthModule, EducationModule, TechnologyModule, ArtModule, EntrepreneurshipModule, ActivityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
