import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { Project } from './entities/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './project.controller';

@Module({
  providers: [ProjectResolver, ProjectService],
  imports: [TypeOrmModule.forFeature([Project])],
  exports: [ProjectService],
  controllers: [ProjectController]
})
export class ProjectModule {}
