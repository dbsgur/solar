import Router from '@koa/router';
import { Context } from 'koa';

export const router = new Router();

router.get('/ping', (ctx: Context) => {
  ctx.body = 'pong';
});
