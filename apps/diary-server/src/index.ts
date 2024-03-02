import Koa, { Context } from 'koa';
import koaBody from 'koa-body';
import {
    errorHandlerMiddleware,
    requestLoggerMiddleware,
    uuidMiddleware,
} from './middlewares';
import { router } from './routes';
import GracefulShutdown from 'http-graceful-shutdown';
import KoaRatelimit from 'koa-ratelimit';

(async () => {
    const app = new Koa();

    app.use(
        KoaRatelimit({
            driver: 'memory',
            db: new Map(),
            duration: 60000, // milliseconds
            errorMessage: 'I hate you. I shoot solar beam~!☀️☀️☀️☀️',
            id: (ctx) => ctx.ip,
            headers: {
                remaining: 'Rate-Limit-Remaining',
                reset: 'Rate-Limit-Reset',
                total: 'Rate-Limit-Total',
            },
            max: 50,
            disableHeader: false,
            // TODO: whitelist, blacklist는 나중에 사용해보자
            // whitelist: (ctx: Context) => {},
            // blacklist: (ctx: Context) => {},
        }),
    );
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
