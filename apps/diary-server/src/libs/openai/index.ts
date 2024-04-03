import fs from 'fs';
import OpenAI from 'openai';

export class OpenAIClient {
    private _client?: OpenAI;

    private get client(): OpenAI {
        if (!this._client) {
            // TODO : API Key 설정
            this._client = new OpenAI();
        }
        return this._client;
    }

    createSpeech(text: string) {
        return this.client.completions.create({
            model: 'tts-1-hd',
            prompt: text,
        });
    }

    public poem = {
        fineTunning: async () => {
            return this.client.files.create({
                file: fs.createReadStream('PoemTone.jsonl'),
                purpose: 'fine-tune',
            });
        },
        get: (input: string) => {
            return this.client.completions.create({
                model: 'gpt-4',
                prompt: input,
            });
        },
    };

    public rap = {
        fineTunning: () => {
            return this.client.files.create({
                file: fs.createReadStream('RapTone.jsonl'),
                purpose: 'fine-tune',
            });
        },
        get: (input: string) => {
            return this.client.completions.create({
                model: 'gpt-4',
                prompt: input,
            });
        },
    };
}
