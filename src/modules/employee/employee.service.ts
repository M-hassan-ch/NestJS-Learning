import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectService } from '../project/project.service';
import { CreateEmployeeDTO } from './dto/employee.dto';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,
        private readonly projectService: ProjectService
    ) { }

    async createEmployee(emp: CreateEmployeeDTO): Promise<Employee> {
        const project = await this.projectService.getProjectById(emp.projectId);

        if (!project) {
            throw new NotFoundException("Project not found");
        }

        const employee = this.employeeRepository.create(emp);
        employee.project = project;
        return await this.employeeRepository.save(employee);
    }

    async getEmployees(): Promise<Employee[]> {
        return await this.employeeRepository.find({ relations: ['project'] });
    }

    async getEmployeeById(id: number): Promise<Employee | undefined> {
        return await this.employeeRepository.findOne(
            {
                where: { id: id }
            }
        );
    }

    async updateEmployee(empId: number, obj: CreateEmployeeDTO): Promise<Employee> {
        const employee = await this.employeeRepository.findOne({
            where: { id: empId }
        });
        const project = await this.projectService.getProjectById(obj.projectId);

        if (!employee) {
            throw new NotFoundException("Employee not found"); // Employee not found
        } else if (!project) {
            throw new NotFoundException("Project not found");
        }

        employee.name = obj.name;
        employee.city = obj.city;
        employee.project = project;

        return await this.employeeRepository.save(employee);
    }

    async deleteEmployee(id: number): Promise<void> {
        await this.employeeRepository.delete(id);
    }
}
