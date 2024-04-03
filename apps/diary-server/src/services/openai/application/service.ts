import { Inject, Service } from 'typedi';
import { OpenAIRepository } from '../infrastructure/repository';

@Service()
export class OpenAIService {
    @Inject()
    private openAIRepository!: OpenAIRepository;

    async createPoem(input: string) {
        return this.openAIRepository.getAnswer(input);
    }

    async fineTuning(type: string) {
        return this.openAIRepository.readStream(type);
    }
}
