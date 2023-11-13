import { Employee } from 'src/modules/employee/employee.entity';
import { BaseEntity } from 'typeorm';
export declare class Project extends BaseEntity {
    id: number;
    name: string;
    code: number;
    employees: Employee[];
}
