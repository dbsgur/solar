import Router from '@koa/router';
import { Context } from 'koa';
import { Container } from 'typedi';
import { OpenAIService } from '../../services/openai/application/service';

const router = new Router();

router.post('/', (ctx: Context, next) => {
    // TODO: poem ? rap ?
    const { diary } = ctx.request.body;

    const openAiService = Container.get(OpenAIService);

    ctx.body = JSON.stringify(openAiService.createPoem(diary));
});

export { router as post };
