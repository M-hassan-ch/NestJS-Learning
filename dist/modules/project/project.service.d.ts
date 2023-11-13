import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { Project } from './entities/project.entity';
export declare class ProjectService {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Project>);
    createProject(createProjectInput: CreateProjectInput): Promise<Project>;
    getProjects(): Promise<Project[]>;
    getProjectById(id: number): Promise<Project | undefined>;
    updateProject(id: number, name: string, code: number): Promise<Project | undefined>;
    deleteProject(id: number): Promise<void>;
}
