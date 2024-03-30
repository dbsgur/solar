import Router from '@koa/router';
import { post } from './post';

const router = new Router({
    prefix: '/openai',
});

// TODO: USE Hapi/Joi

router.use(post.routes());

export { router as openaiRouter };
