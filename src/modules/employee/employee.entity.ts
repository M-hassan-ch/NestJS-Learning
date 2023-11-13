import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { Project } from '../project/entities/project.entity';

@ObjectType()
@Entity('Employee')
export class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column({ type: 'varchar' })
    @Field()
    name: string;

    @Column({ type: 'varchar' })
    @Field()
    city: string;

    @ManyToOne(() => Project, project => project.employees)
    @Field(() => Project, { nullable: true })
    project: Project;
}
