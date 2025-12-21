declare module '@env' {
  export const APP_ENV: 'development' | 'qa' | 'production';
  export const API_URL: string;
  export const API_TIMEOUT: string;
  export const ENABLE_LOGGING: string;
}
