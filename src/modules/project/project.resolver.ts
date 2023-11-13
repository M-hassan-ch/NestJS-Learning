import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project, { name: 'createProject' })
  async createProject(@Args('createProjectInput') createProjectInput: CreateProjectInput) {
    return await this.projectService.createProject(createProjectInput);
  }

  @Query(() => [Project], { name: 'getAllProjects' })
  findAll() {
    return this.projectService.getProjects();
  }

  @Query(() => Project, { name: 'project' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.getProjectById(id);
  }

  // @Mutation(() => Project)
  // updateProject(@Args('updateProjectInput') updateProjectInput: UpdateProjectInput) {
  //   return this.projectService.updateProject(updateProjectInput.id, updateProjectInput);
  // }

  @Mutation(() => Project)
  removeProject(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.deleteProject(id);
  }
}
