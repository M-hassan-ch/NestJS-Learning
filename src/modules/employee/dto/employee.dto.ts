import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateEmployeeDTO{
    @Field()
    name : string;

    @Field()
    city : string;

    @Field(()=> Int)
    projectId: number;

}