import Koa from 'koa';
import koaBody from 'koa-body';
import {
    errorHandlerMiddleware,
    requestLoggerMiddleware,
    uuidMiddleware,
} from '../middleware';
import { router } from './routes';
import GracefulShutdown from 'http-graceful-shutdown';

(async () => {
    const app = new Koa();
    // TODO: 포트 바꿔라잉
    const PORT = 6;
    app.use(uuidMiddleware);
    app.use(requestLoggerMiddleware);
    app.use(errorHandlerMiddleware);
    // TODO: CORS middleware

    app.use(koaBody({ multipart: true, jsonLimit: 10 * 1024 * 1024 })); // 10MB
    app.use(router.middleware());

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}!`);
    });

    GracefulShutdown(app, {
        signals: 'SIGINT SIGTERM',
        timeout: 30000,
        development: false,
        forceExit: true,
        onShutdown: async (signals) => {
            // TODO: DB 연결 끊기
            console.log('SERVER SHUTDOWN SIGNAL RECEIVED', signals);
            setTimeout(function () {
                console.log('... cleanup finished');
            }, 1000);
        },
        finally: () => {
            console.log('SERVER GRACEFUL SHUTDOWN 🫡');
        },
    });
})();
