import Router from '@koa/router';
import { fineTuneRouter } from './fine-tune';
import { post } from './post';
import { ttsRouter } from './tts';

const router = new Router({
    prefix: '/openai',
});

router.use(post.routes());
router.use(fineTuneRouter.routes());
router.use(ttsRouter.routes());

export { router as openaiRouter };
