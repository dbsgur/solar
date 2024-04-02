import Router from '@koa/router';
import { get } from './get';

const router = new Router({
    prefix: '/fine-tune',
});

// TODO: USE Hapi/Joi

router.use(get.routes());

export { router as fineTuneRouter };
