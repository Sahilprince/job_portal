import {
    ArgumentsHost,
    BadRequestException,
    Catch,
    ExceptionFilter
} from '@nestjs/common';


@Catch()
export class ValidationFilter<T> implements ExceptionFilter {

    constructor(
    ) { }
    catch(exception: T, host: ArgumentsHost) {

        if (exception instanceof BadRequestException) {
            const response = host.switchToHttp().getResponse();
            const resp = exception.getResponse()
            resp["status"] = 'fail';
            resp["errCode"] = "01";
            if (resp["message"][0] !== undefined) {
                resp["message"] = resp["message"][0];
            }
            delete resp["statusCode"]
            response.status(exception.getStatus())
                .json(exception.getResponse());
        } else {
            const response = host.switchToHttp().getResponse();
            let resp = {};
            let logData = {};
            const context = host.switchToHttp();
            const req = context.getRequest<Request>();
            logData["message"] = resp["message"] = exception["message"];
            resp["error"] = "Bad Request";
            resp["status"] = "fail";
            if (exception["config"] !== undefined) {
                if (exception["config"]['url'] !== undefined) {
                    logData["url"] = exception["config"]['url']
                }
            }
            resp["message"] = "Something went wrong, please try again in sometime.";
            response.status(400).json(resp);
        }
    }
}
