import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from 'src/modules/employee/employee.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('Project')
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number

  @Column({ type: 'varchar' })
  @Field()
  name: string;

  @Field(() => Int)
  @Column({ type: 'int' })
  code: number;

  @OneToMany(() => Employee, employee => employee.project)
  @Field(() => [Employee], {nullable: true})
  employees: Employee[];
}
