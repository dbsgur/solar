import * as ShaJs from 'sha.js';

/**
 * 현재는 now.toISOString()을 SHA-256으로 사용
 */
export const generateSalt = () => ShaJs('sha256').update(new Date().toISOString()).digest('hex');
