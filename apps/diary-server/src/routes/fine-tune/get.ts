import Router from '@koa/router';
import { Container } from 'typedi';
import { DiaryService } from '../../services/diary/application/service';

const router = new Router();

router.get('/', async (ctx) => {
    // type 받기
    const diaryService = Container.get(DiaryService);
    await diaryService.fineTunning('poem');

    ctx.body = {};
    ctx.status = 200;
});

export { router as get };
