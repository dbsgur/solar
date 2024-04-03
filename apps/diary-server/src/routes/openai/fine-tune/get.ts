import Router from '@koa/router';
import { Container } from 'typedi';
import { OpenAIService } from '../../../services/openai/application/service';

const router = new Router();

router.get('/', async (ctx) => {
    const openAiService = Container.get(OpenAIService);
    await openAiService.fineTuning('poem');

    ctx.body = {};
    ctx.status = 200;
});

export { router as get };
