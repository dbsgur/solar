import fs from 'fs';
import { Service, Inject } from 'typedi';
import { OpenAIRepository } from '../../openai/infrastructure/repository';
import { TTSRepository } from '../infrastructure/repository';

@Service()
export class TTSService {
    @Inject()
    private openAIRepository!: OpenAIRepository;

    @Inject()
    private tTSRepository!: TTSRepository;

    async createFile(inputText: string) {
        const aiSpeech = await this.generateSpeech(inputText);
        const buffer = Buffer.from(await aiSpeech.arrayBuffer());
        await fs.promises.writeFile(this.tTSRepository.getPath(), buffer);
    }

    generateSpeech(inputText: string) {
        return this.openAIRepository.audio.speech.create({
            model: 'tts-1',
            voice: 'nova',
            input: inputText,
        });
    }
}
