import { BaseEntity } from 'typeorm';
import { Project } from '../project/entities/project.entity';
export declare class Employee extends BaseEntity {
    id: number;
    name: string;
    city: string;
    project: Project;
}
