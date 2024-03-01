import { Context } from 'koa';

export const requestLoggerMiddleware = async(ctx: Context, next: () => Promise<any>) => {
  const start = Date.now();
  try {
    await next();
  } finally {
    // NOTE: 내부 통신은 무시한다.
    if (!ctx.req.url?.includes('_next')){
      const duration = Date.now() - start;
      const txId = ctx.state && ctx.state.txId;
      console.log(`[${ctx.method}, ${txId}] ${ctx.url} - ${duration}ms`);
    }
  }
}
