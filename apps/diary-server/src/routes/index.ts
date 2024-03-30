import Router from '@koa/router';
import { Context } from 'koa';
import { openaiRouter } from './openai';

export const router = new Router();

// TODO: USE Hapi/Joi

router.get('/ping', (ctx: Context) => {
    ctx.body = 'pong';
});

router.use(openaiRouter.routes());
