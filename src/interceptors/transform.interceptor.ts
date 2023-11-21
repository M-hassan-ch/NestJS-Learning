import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomInterceptor implements NestInterceptor {
    private readonly logger = new Logger(CustomInterceptor.name);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        this.logger.log("executing custom intercepter");
        return next.handle().pipe(
            map((data) => {
                if (data instanceof Object) {
                    data.modified = true;
                    data.statusCode = 220;
                }
                return data;
            }),
        );
    }
}
