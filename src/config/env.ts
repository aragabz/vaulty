import {z} from 'zod';
import {
  APP_ENV,
  API_URL,
  API_TIMEOUT,
  ENABLE_LOGGING,
} from '@env';

const envSchema = z.object({
  APP_ENV: z.enum(['development', 'qa', 'production']),
  API_URL: z.string().url(),
  API_TIMEOUT: z.string().transform(val => parseInt(val, 10)),
  ENABLE_LOGGING: z
    .string()
    .transform(val => val === 'true')
    .pipe(z.boolean()),
});

type Env = z.infer<typeof envSchema>;

function validateEnv(): Env {
  try {
    const env = envSchema.parse({
      APP_ENV,
      API_URL,
      API_TIMEOUT,
      ENABLE_LOGGING,
    });
    
    console.log('✅ Environment variables validated successfully');
    return env;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('❌ Invalid environment variables:', error.issues);
      throw new Error(
        `Environment validation failed: ${JSON.stringify(error.issues)}`,
      );
    }
    throw error;
  }
}

export const env = validateEnv();
