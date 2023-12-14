import fs from 'fs';
import OpenAI from 'openai';
import { Service } from 'typedi';

@Service()
export class OpenAIClient {
    private _client: any;

    private get client() {
        if (!this._client) {
            this._client = new OpenAI();
            this.fineTuningTone();
        }
        return this._client;
    }

    private async fineTuningTone() {
        await this.client.files.create({
            // 한국 시인의 시를 사용하여 fine-tuning
            file: fs.createReadStream('PoemTone.jsonl'),
            purpose: 'fine-tune',
        });
    }

    private get audio() {
        return this.client.audio;
    }

    createPoem(input: string) {
        return this.client.completions.create({
            model: 'gpt-4',
            prompt: input,
        });
    }

    createSpeech(input: string) {
        return this.client.audio.speech.create({
            model: 'tts-1',
            voice: 'nova',
            input,
        });
    }
}
