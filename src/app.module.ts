import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { join } from 'path';
import { EmployeeModule } from './modules/employee/employee.module';
import { EmployeeResolver } from './modules/employee/employee.resolver';
import { ProjectModule } from './modules/project/project.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // resolvers: [EmployeeResolver],
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    EmployeeModule,
    ProjectModule
  ],
})
export class AppModule {}
