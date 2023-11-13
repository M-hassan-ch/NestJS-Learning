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
exports.EmployeeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const employee_dto_1 = require("./dto/employee.dto");
const employee_entity_1 = require("./employee.entity");
const employee_service_1 = require("./employee.service");
let EmployeeResolver = class EmployeeResolver {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    async getAllEmployees() {
        return await this.employeeService.getEmployees();
    }
    async create(employee) {
        return await this.employeeService.createEmployee(employee);
    }
    async update(empId, employee) {
        return await this.employeeService.updateEmployee(empId, employee);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [employee_entity_1.Employee], { name: 'getAllEmployees' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "getAllEmployees", null);
__decorate([
    (0, graphql_1.Mutation)(() => employee_entity_1.Employee, { name: 'createEmployee' }),
    __param(0, (0, graphql_1.Args)('employee')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employee_dto_1.CreateEmployeeDTO]),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Mutation)(() => employee_entity_1.Employee, { name: 'updateEmployee' }),
    __param(0, (0, graphql_1.Args)('empId')),
    __param(1, (0, graphql_1.Args)('employee')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, employee_dto_1.CreateEmployeeDTO]),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "update", null);
EmployeeResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeResolver);
exports.EmployeeResolver = EmployeeResolver;
//# sourceMappingURL=employee.resolver.js.map