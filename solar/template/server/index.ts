import Koa from 'koa';
import koaBody from 'koa-body';
import { errorHandlerMiddleware, requestLoggerMiddleware } from './middleware';


(async()=> {
  const app = new Koa();
  // TODO: 포트 바꿔라잉
  const PORT = 6;
  app.use(requestLoggerMiddleware);
  app.use(errorHandlerMiddleware);
  // TODO: CORS middleware

  app.use(koaBody({ multipart: true, jsonLimit: 10 * 1024 * 1024 })); // 10MB

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
})()
