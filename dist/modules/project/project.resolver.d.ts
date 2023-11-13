import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
export declare class ProjectResolver {
    private readonly projectService;
    constructor(projectService: ProjectService);
    createProject(createProjectInput: CreateProjectInput): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project>;
    removeProject(id: number): Promise<void>;
}
