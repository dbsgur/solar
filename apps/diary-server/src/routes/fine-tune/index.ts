import Router from '@koa/router';
import { get } from './get';

const router = new Router({
    prefix: '/fine-tune',
});

router.use(get.routes());

export { router as fineTuneRouter };
