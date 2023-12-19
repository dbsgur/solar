import path from 'path';
import OpenAI from 'openai';
import { Service } from 'typedi';

@Service()
export class TTSRepository {
    private _client: any;

    path!: string;

    private get client() {
        if (!this._client) {
            this._client = new OpenAI();
        }
        return this._client;
    }

    constructor() {
        // TODO: path 설정
        this.path = path.resolve('./speech.mp3');
    }

    getPath() {
        return this.path;
    }
}
