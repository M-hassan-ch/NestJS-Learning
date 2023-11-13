import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) { }

  async createProject(createProjectInput: CreateProjectInput) {
    const project = this.projectRepository.create(createProjectInput);
    return await this.projectRepository.save(project);
  }

  async getProjects(): Promise<Project[]> {
    return await this.projectRepository.find({
      relations: {employees: true},
  });
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    return await this.projectRepository.findOne({
      where: { id: id }
    });
  }

  async updateProject(id: number, name: string, code: number): Promise<Project | undefined> {
    const project = await this.projectRepository.findOne({
      where: { id: id }
    });
    
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    project.name = name;
    project.code = code;

    return await this.projectRepository.save(project);
  }

  async deleteProject(id: number): Promise<void> {
    const result = await this.projectRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
  }
}
