import OpenAI from 'openai';
import { Service } from 'typedi';

// OpenAI 서비스 정의
@Service()
class OpenAIService {
    client;

    constructor() {
        this.client = new OpenAI();
    }

    get audio() {
        return this.client.audio;
    }
}
