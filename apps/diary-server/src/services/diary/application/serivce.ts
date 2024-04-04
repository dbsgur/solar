import { Inject, Service } from 'typedi';
import { OpenAIClient } from '../../../libs/openai';
import { Diary } from '../domain/model';

@Service()
export class DiaryService {
    @Inject()
    private openAIClient!: OpenAIClient;

    textToSpeech(diary: Diary) {
        // const speech = this.openAIClient.createSpeech(diary.original);
        return this.openAIClient.createSpeech(diary.original);
    }

    fineTunning(type: 'poem' | 'rap') {
        return this.openAIClient[type].fineTunning();
    }

    createText(type: 'poem' | 'rap', originalText: string) {
        return this.openAIClient[type].create(originalText);
    }

    createSpeech(originalText: string) {
        return this.openAIClient.createSpeech(originalText);
    }
}
