import Router from '@koa/router';

const router = new Router({
    prefix: '/chat',
});

export { router as chatRouter };
