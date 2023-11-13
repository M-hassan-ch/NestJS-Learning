import { Repository } from 'typeorm';
import { ProjectService } from '../project/project.service';
import { CreateEmployeeDTO } from './dto/employee.dto';
import { Employee } from './employee.entity';
export declare class EmployeeService {
    private readonly employeeRepository;
    private readonly projectService;
    constructor(employeeRepository: Repository<Employee>, projectService: ProjectService);
    createEmployee(emp: CreateEmployeeDTO): Promise<Employee>;
    getEmployees(): Promise<Employee[]>;
    getEmployeeById(id: number): Promise<Employee | undefined>;
    updateEmployee(empId: number, obj: CreateEmployeeDTO): Promise<Employee>;
    deleteEmployee(id: number): Promise<void>;
}
