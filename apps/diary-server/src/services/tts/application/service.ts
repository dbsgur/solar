import fs from 'fs';
import { Service, Inject } from 'typedi';
import { TTSRepository } from '../infrastructure/repository';

@Service()
export class TTSService {
    @Inject()
    // private openAIClient!: OpenAIClient;
    @Inject()
    private tTSRepository!: TTSRepository;

    // async createFile(inputText: string) {
    // const aiSpeech = await this.generateSpeech(inputText);
    // const buffer = Buffer.from(await aiSpeech.arrayBuffer());
    // await fs.promises.writeFile(this.tTSRepository.getPath(), buffer);
    // }

    // generateSpeech(inputText: string) {
    // return this.openAIClient.createSpeech(inputText);
    // }
}
