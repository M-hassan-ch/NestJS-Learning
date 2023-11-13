import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEmployeeDTO } from './dto/employee.dto';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Resolver()
export class EmployeeResolver{
    constructor(
        private readonly employeeService: EmployeeService,
    ) { }

    @Query(() => [Employee], {name: 'getAllEmployees'})
    async getAllEmployees(){
        return await this.employeeService.getEmployees();
    }

    @Mutation(()=> Employee, {name: 'createEmployee'})
    async create(@Args('employee') employee : CreateEmployeeDTO){
        return await this.employeeService.createEmployee(employee);
    }

    @Mutation(()=> Employee, {name: 'updateEmployee'})
    async update(@Args('empId') empId : number, @Args('employee') employee : CreateEmployeeDTO){
        return await this.employeeService.updateEmployee(empId, employee);
    }
}
