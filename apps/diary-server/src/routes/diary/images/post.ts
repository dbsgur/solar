import Router from '@koa/router';
import { Context } from 'koa';
import { Container } from 'typedi';
import { DiaryService } from '../../../services/diary/application/service';

const router = new Router();

router.post('/', async (ctx: Context, next) => {
    // TODO: poem ? rap ?
    const { diary } = ctx.request.body;

    const diaryService = Container.get(DiaryService);

    ctx.body = await diaryService.createImage(diary);
    ctx.status = 201;
});

export { router as post };
