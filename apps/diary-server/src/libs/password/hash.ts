import * as ShaJs from 'sha.js';

export const generateHash = (str: string) =>
    ShaJs('sha512').update(str).digest('hex');
