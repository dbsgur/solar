import { Context } from 'koa';

export const requestLogger = async(ctx: Context, next: () => Promise<any>) => {
  const start = Date.now();
  try {
    await next();
  } finally {
    const duration = Date.now() - start;
    console.log(`[${ctx.method} REQUEST] ${ctx.url} - ${duration}ms`);
  }
}
