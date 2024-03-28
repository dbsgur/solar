import OpenAI from 'openai';
import { Service } from 'typedi';

// OpenAI 서비스 정의
@Service()
export class OpenAIRepository {
    client;

    constructor() {
        this.client = new OpenAI();
    }

    get audio() {
        return this.client.audio;
    }
}
