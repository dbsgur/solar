import { Context } from 'koa';
import { v4 as uuidV4 } from 'uuid';

export const uuidMiddleware = async (ctx: Context, next: () => Promise<any>) => {
  ctx.state.txId = uuidV4();
  await next();
};
