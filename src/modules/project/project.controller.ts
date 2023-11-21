import { Body, Controller, Get, Res, UseGuards, UseInterceptors } from "@nestjs/common";
import { CustomGuard } from "src/guards/authGuard.guard";
import { CustomInterceptor } from "src/interceptors/transform.interceptor";
import { FreezePipe } from "src/pipes/freeze.pipe";
import { ProjectService } from "./project.service";

@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) { }

    @Get()
    @UseInterceptors(CustomInterceptor)
    @UseGuards(CustomGuard)
    async getAllProjects(@Body(new FreezePipe()) body: any) {
       body.email = "sada";
       return "";
    }
}
