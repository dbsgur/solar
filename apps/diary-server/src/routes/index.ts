import Router from '@koa/router';
import { Context } from 'koa';
import { diaryRouter } from './diary';
import { fineTuneRouter } from './fine-tune';

export const router = new Router();

// TODO: USE Hapi/Joi

router.get('/ping', (ctx: Context) => {
    ctx.body = 'pong';
});

router.use(diaryRouter.routes());
router.use(fineTuneRouter.routes());
