import Router from '@koa/router';
import { chatRouter } from './chat';
import { imagesRouter } from './images';
import { post } from './post';
import { speechRouter } from './speech';

const router = new Router({
    prefix: '/diary',
});

router.use(post.routes());
router.use(speechRouter.routes());
router.use(chatRouter.routes());
router.use(imagesRouter.routes());

export { router as diaryRouter };
