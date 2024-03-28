import path from 'path';
import { Service } from 'typedi';

@Service()
export class TTSRepository {
    path!: string;

    constructor() {
        // TODO: path 설정
        this.path = path.resolve('./speech.mp3');
    }

    getPath() {
        return this.path;
    }
}
