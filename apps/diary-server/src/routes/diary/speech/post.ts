import Router from '@koa/router';
import { Context } from 'koa';
import { Container } from 'typedi';
import { DiaryService } from '../../../services/diary/application/service';

const router = new Router();

router.post('/', (ctx: Context, next) => {
    // TODO: poem ? rap ?
    const { diary } = ctx.request.body;

    const diaryService = Container.get(DiaryService);

    ctx.body = diaryService.createSpeech(diary);
});

export { router as post };
