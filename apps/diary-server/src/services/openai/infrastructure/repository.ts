import fs from 'fs';
import OpenAI from 'openai';
import { Service } from 'typedi';

// OpenAI 서비스 정의
@Service()
export class OpenAIRepository {
    private _client: any;

    private get client() {
        if (!this._client) {
            this._client = new OpenAI();
            // TODO: fine-tuning 여러개 추상화 ?
            this.readStream('PoemTone.jsonl');
        }
        return this._client;
    }

    get audio() {
        return this.client.audio;
    }

    async readStream(file: string) {
        await this.client.files.create({
            file: fs.createReadStream(file),
            purpose: 'fine-tune',
        });
    }

    getAnswer(input: string) {
        return this.client.completions.create({
            model: 'gpt-4',
            prompt: input,
        });
    }
}
