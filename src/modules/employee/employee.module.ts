import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { ProjectModule } from '../project/project.module';

@Module({
  providers: [EmployeeService, EmployeeResolver],
  imports: [TypeOrmModule.forFeature([Employee]), ProjectModule],
})
export class EmployeeModule {}
