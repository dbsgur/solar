import Router from '@koa/router';
import { post } from './post';

const router = new Router({
    prefix: '/chat',
});

router.use(post.routes());

export { router as chatRouter };
