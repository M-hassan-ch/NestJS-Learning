import { CreateEmployeeDTO } from './dto/employee.dto';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';
export declare class EmployeeResolver {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    getAllEmployees(): Promise<Employee[]>;
    create(employee: CreateEmployeeDTO): Promise<Employee>;
    update(empId: number, employee: CreateEmployeeDTO): Promise<Employee>;
}
