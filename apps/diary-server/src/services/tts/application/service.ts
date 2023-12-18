import fs from 'fs';
import { Service, Inject } from 'typedi';
import { TTSRepository } from '../infrastructure/repository';

@Service()
export class TTSService {
    @Inject()
    // private openAIClient!: OpenAIClient;
    @Inject()
    private tTSRepository!: TTSRepository;
}
