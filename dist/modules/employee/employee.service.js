"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_service_1 = require("../project/project.service");
const employee_entity_1 = require("./employee.entity");
let EmployeeService = class EmployeeService {
    constructor(employeeRepository, projectService) {
        this.employeeRepository = employeeRepository;
        this.projectService = projectService;
    }
    async createEmployee(emp) {
        const project = await this.projectService.getProjectById(emp.projectId);
        if (!project) {
            throw new common_1.NotFoundException("Project not found");
        }
        const employee = this.employeeRepository.create(emp);
        employee.project = project;
        return await this.employeeRepository.save(employee);
    }
    async getEmployees() {
        return await this.employeeRepository.find({ relations: ['project'] });
    }
    async getEmployeeById(id) {
        return await this.employeeRepository.findOne({
            where: { id: id }
        });
    }
    async updateEmployee(empId, obj) {
        const employee = await this.employeeRepository.findOne({
            where: { id: empId }
        });
        const project = await this.projectService.getProjectById(obj.projectId);
        if (!employee) {
            throw new common_1.NotFoundException("Employee not found");
        }
        else if (!project) {
            throw new common_1.NotFoundException("Project not found");
        }
        employee.name = obj.name;
        employee.city = obj.city;
        employee.project = project;
        return await this.employeeRepository.save(employee);
    }
    async deleteEmployee(id) {
        await this.employeeRepository.delete(id);
    }
};
EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        project_service_1.ProjectService])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map