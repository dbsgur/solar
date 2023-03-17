import fs from 'fs';
import path from 'path';
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

    async createSpeech(text: string) {
        // const speechFile = path.resolve('./speech.mp3');
        // const mp3 = await this.client.audio.speech.create({
        //     model: 'tts-1',
        //     voice: 'alloy',
        //     input: 'Today is a wonderful day to build something people love!',
        // });
        // const buffer = Buffer.from(await mp3.arrayBuffer());
        // await fs.promises.writeFile(speechFile, buffer);
        return this.client.audio.speech.create({
            model: 'tts-1-hd',
            voice: 'nova',
            input: text,
        });
    }

    async createImage(prompt: string) {
        const {
            data: [{ url }],
        } = await this.client.images.generate({
            model: 'dall-e-3',
            style: 'natural',
            prompt,
        });
        return url;
    }

    public poem = {
        fineTunning: async () => {
            return this.client.files.create({
                file: fs.createReadStream('PoemTone.jsonl'),
                purpose: 'fine-tune',
            });
        },
        create: (input: string) => {
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
        create: (input: string) => {
            return this.client.completions.create({
                model: 'gpt-4',
                prompt: input,
            });
        },
    };
}
