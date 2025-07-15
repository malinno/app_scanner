type EnvType = 'dev' | 'production';

export interface EnvConfig {
  API_URL: string;
  // Thêm các biến khác nếu cần
}

const ENV: Record<EnvType, EnvConfig> = {
  dev: {
    API_URL: 'https://api-dev.example.com',
  },
  production: {
    API_URL: 'https://api.example.com',
  },
};

const getEnv = (): EnvConfig => {
  if (__DEV__) return ENV.dev;
  return ENV.production;
};

export default getEnv();