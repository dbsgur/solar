import { Inject } from 'typedi';
import { OpenAIClient } from '../../../libs/openai';

export class Diary {
    @Inject()
    private openAIClient!: OpenAIClient;

    id!: number;

    original!: string;

    poem?: string;

    rap?: string;

    constructor(original: string) {
        this.original = original;
    }

    // ?? openAI 호출이 도메인 로직에 들어가는 것이 맞는지 의문
    // ?? 일단 서비스에서 호출하는 형식으로 사용
    async setPoem(originalText: string) {
        const {
            choices: [{ text: poem }],
        } = await this.openAIClient.poem.create(originalText);
        this.poem = poem;
    }

    async setRap(originalText: string) {
        const {
            choices: [{ text: rap }],
        } = await this.openAIClient.rap.create(originalText);
        this.rap = rap;
    }
}
