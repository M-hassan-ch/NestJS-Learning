import { CanActivate, ExecutionContext, Injectable, Logger } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class CustomGuard implements CanActivate{
    private readonly logger = new Logger(CustomGuard.name);

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>{
        this.logger.log("Executing custom guard")
        const req = context.switchToHttp().getRequest();
        const email = req?.body?.email;
        return email == 'test' ? true : false;
    }
}